import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import { db } from "~/server/db";
import { Market, Prisma } from "@prisma/client";
import {
  CalcCraftingCosts,
  ICalcCraftingCostsError,
  IItemCrafting,
  IRecipeCrafting,
} from "~/lib/CalcCraftingCost";
import { FetchCrossoutDBMarketPrices } from "./FetchCrossoutDBMarketPrices";

export const config = {
  runtime: "edge",
};

interface IUpdateMarketPrices {
  debug?: {
    batchMarketPrices: Prisma.MarketCreateManyInput[];
    recipeCraftCosts: IRecipeCrafting[];
    itemCraftCosts: IItemCrafting[];
  };
  errors?: {
    updateMarketPricesErrors: IUpdateMarketPricesError[];
    calcCraftingCostsErrors: ICalcCraftingCostsError[];
  };
}

interface IUpdateMarketPricesError {
  id: number;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    console.error("Failed authorization");
    return res
      .status(401)
      .json({ success: false, error: "Failed authorization" });
  }
  try {
    const data = await UpdateMarketPrices();

    return res.status(200).json({
      success: true,
      debug: data.debug,
      errors: data.errors,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: "Failed to fetch data" });
  }
}

export async function UpdateMarketPrices(): Promise<IUpdateMarketPrices> {
  const marketPrices = await FetchCrossoutDBMarketPrices();
  const batchMarketPrices: Prisma.MarketCreateManyInput[] = [];
  const updateMarketPricesErrors: IUpdateMarketPricesError[] = [];

  const items = await db.item.findMany({});

  for (const marketPrice of marketPrices) {
    const item = items.find((item) => item.oldId === marketPrice.id);
    if (!item) {
      // TODO: Add new market price item to DB
      updateMarketPricesErrors.push({
        id: marketPrice.id,
        message: `Failed to find matching item`,
      });
      continue;
    }

    batchMarketPrices.push({
      itemId: item.id,
      marketDef: item.marketDef ?? "",
      sellPriceMin: marketPrice.sellPrice,
      sellOrders: marketPrice.sellOffers,
      buyPriceMax: marketPrice.buyPrice,
      buyOrders: marketPrice.buyOrders,
      timestamp: new Date(),
    });
  }

  await db.market.createMany({ data: batchMarketPrices });

  const {
    recipeCraftCosts,
    itemCraftCosts,
    errors: calcCraftingCostsErrors,
  } = await CalcCraftingCosts();

  if (updateMarketPricesErrors?.length > 0) {
    console.error("One or more errors:", updateMarketPricesErrors);
  }

  await UpdateRecipeCraftingCosts(recipeCraftCosts);
  await UpdateItemCraftingCosts(batchMarketPrices, itemCraftCosts);

  return {
    debug: {
      batchMarketPrices: batchMarketPrices,
      recipeCraftCosts: recipeCraftCosts,
      itemCraftCosts: itemCraftCosts,
    },
    errors: {
      updateMarketPricesErrors: updateMarketPricesErrors,
      calcCraftingCostsErrors: calcCraftingCostsErrors,
    },
  };
}

async function UpdateRecipeCraftingCosts(recipeCraftCosts: IRecipeCrafting[]) {
  for (const recipeCraftCost of recipeCraftCosts) {
    await db.recipe.update({
      where: {
        id: recipeCraftCost.recipeId,
      },
      data: {
        craftCost: recipeCraftCost.craftCost,
        timestamp: new Date(),
      },
    });
  }
}

async function UpdateItemCraftingCosts(
  batchMarketPrices: Prisma.MarketCreateManyInput[],
  itemCraftCosts: IItemCrafting[],
) {
  for (const batchMarketPrice of batchMarketPrices) {
    const craftCost = itemCraftCosts.find(
      (item) => item.itemId === batchMarketPrice.itemId,
    )?.craftCost;
    await db.item.update({
      where: {
        marketDef: batchMarketPrice.marketDef,
      },
      data: {
        sellPriceMin: batchMarketPrice.sellPriceMin,
        sellOrders: batchMarketPrice.sellOrders,
        buyPriceMax: batchMarketPrice.buyPriceMax,
        buyOrders: batchMarketPrice.buyOrders,
        craftCost: craftCost,
        timestamp: batchMarketPrice.timestamp,
      },
    });
  }
}
