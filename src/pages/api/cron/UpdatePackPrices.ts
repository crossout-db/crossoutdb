import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/server/db";
import { type Prisma } from "@prisma/client";
import { FetchSteamApps } from "./FetchSteamApps";
import { FetchGaijinApps } from "./FetchGaijinApps";

export const config = {
  runtime: "edge",
};

export interface IFetchAppError {
  appId: string;
  data?: string;
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
    const data = await UpdatePackPrices();

    return res.status(200).json({
      success: true,
      data: data.appPrices,
      errors: data.errors,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: "Failed to fetch data" });
  }
}

export async function UpdatePackPrices() {
  const countryCodes = ["us", "de", "uk", "ru"];
  const packs = await db.pack.findMany({
    where: {
      active: true,
    },
  });
  const batchPackPrices: Prisma.PackPriceCreateManyInput[] = [];
  const batchAppErrors: IFetchAppError[] = [];

  const steamAppIds = packs?.map((pack) => Number(pack.steamKey)).join(",");
  for (const countryCode of countryCodes) {
    const { appPrices, errors } = await FetchSteamApps(
      countryCode,
      steamAppIds,
      packs,
    );
    if (appPrices) {
      batchPackPrices.push(...appPrices);
    }
    if (errors) {
      batchAppErrors.push(...errors);
    }
  }

  for (const pack of packs) {
    if (pack.gaijinKey === null) {
      continue;
    } else {
      const { appPrice, error } = await FetchGaijinApps(
        pack.gaijinKey,
        pack.id,
      );
      if (typeof appPrice !== "undefined") {
        batchPackPrices.push(appPrice);
      }
      if (typeof error !== "undefined") {
        batchAppErrors.push(error);
      }
    }
  }

  await db.packPrice.createMany({ data: batchPackPrices });
  return { appPrices: batchPackPrices, errors: batchAppErrors };
}
