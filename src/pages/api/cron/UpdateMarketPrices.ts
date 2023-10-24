import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import { db } from "~/server/db";
import { Prisma } from "@prisma/client";
import { CalcCraftingCosts } from "~/lib/CalcCraftingCost";

interface MarketPriceAPI {
  id: number;
  name: string;
  localizedName: null | string;
  availableName: string;
  description: null | string;
  sellOffers: number;
  sellPrice: number;
  buyOrders: number;
  buyPrice: number;
  meta: number;
  removed: number;
  craftable: number;
  popularity: number;
  workbenchRarity: number;
  craftingSellSum: number;
  craftingBuySum: number;
  amount: number;
  demandSupplyRatio: number;
  margin: number;
  roi: number;
  craftingMargin: number;
  formatDemandSupplyRatio: string;
  formatMargin: string;
  formatRoi: string;
  formatCraftingMargin: string;
  craftVsBuy: string;
  timestamp: Date;
  lastUpdateTime: Date;
  rarityId: number;
  rarityName: string | null;
  categoryId: number;
  categoryName: string | null;
  typeId: number;
  recipeId: number;
  typeName: string;
  factionNumber: number;
  faction: string | null;
  formatBuyPrice: string;
  formatSellPrice: string;
  formatCraftingSellSum: string;
  formatCraftingBuySum: string;
  craftingResultAmount: number;
  image: string;
  imagePath: string;
  sortedStats: string[] | null;
}

interface Errors {
  id: number;
  message: string;
}

export default async function UpdateMarketPrices(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const authHeader = request.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    console.error("Failed authorization");
    return response.status(401).json({ success: false });
  }
  try {
    const fetchUrl = env.CROSSOUT_MARKET_URL;

    // console.log(`Fetching data from: ${fetchUrl}`);
    const result = await fetch(fetchUrl);
    const data: MarketPriceAPI[] = (await result.json()) as MarketPriceAPI[];
    const errors: Errors[] = [];

    const batchMarketPrices: Prisma.MarketCreateManyInput[] = [];
    const items = await db.item.findMany({});

    for (const marketPrice of data) {
      const item = items.find((item) => item.id === marketPrice.id);
      if (!item) {
        errors.push({
          id: marketPrice.id,
          message: `Failed to find item with marketDef`,
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

    // await db.market.createMany({ data: batchMarketPrices });
    const {recipeCraftCosts, itemCraftCosts, itemPrices} =
      await CalcCraftingCosts();

    if (errors.length === 0) {
      return response
        .status(200)
        .json({
          success: true,
          data: batchMarketPrices,
          itemPrices: itemPrices,
          recipes: recipeCraftCosts,
          items: itemCraftCosts,
        });
    } else {
      console.error("One or more errors:", errors);
      return response
        .status(200)
        .json({
          success: true,
          data: batchMarketPrices,
          itemPrices: itemPrices,
          recipes: recipeCraftCosts,
          items: itemCraftCosts,
          errors: errors,
        });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return response.status(500).json({ error: "Failed to fetch data" });
  }
}
