import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";

export interface ICrossoutDBMarketPriceAPI {
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    console.error("Failed authorization");
    return res.status(401).json({ success: false, error: "Failed authorization" });
  }
  try {
    const data = await FetchCrossoutDBMarketPrices();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: "Failed to fetch data" });
  }
}

export async function FetchCrossoutDBMarketPrices(): Promise<
  ICrossoutDBMarketPriceAPI[]
> {
  const fetchUrl = env.CROSSOUT_MARKET_URL;

  console.log(`Fetching data from: ${fetchUrl}`);
  const result = await fetch(fetchUrl);
  const data: ICrossoutDBMarketPriceAPI[] =
    (await result.json()) as ICrossoutDBMarketPriceAPI[];

  return data;
}
