import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import { db } from "~/server/db";
import { Prisma } from "@prisma/client";

export interface AppDetailsPriceOverview {
  apps: App[];
}

export interface App {
  appId: number;
  success: boolean;
  data: Data;
}

export interface Data {
  price_overview: PriceOverview;
}

export interface PriceOverview {
  currency: string;
  initial: number;
  final: number;
  discount_percent: number;
  initial_formatted: string;
  final_formatted: string;
}

export interface AppError {
  appId: number;
  countryCode: string[];
  data?: string;
}

export default async function FetchSteamApps(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const authHeader = request.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    console.error("Failed authorization");
    return response.status(401).json({ success: false });
  }
  try {
    const countryCodes = ["us", "de", "uk", "ru"];
    const packs = await db.pack.findMany({
      select: { steamAppId: true },
    });
    const appIds = packs?.map((pack) => pack.steamAppId).join(",");

    // const appIds = "759590,783870,764460,806120,809740,708490,853170,719670,708500,878630,643740,812760,887050,893760,960290,1034510,1034511,1049120,1049121,1059100,1076740,1076741,1141790,1158240,1,1158241,1192400,1193840,2,1015950,1254240,1276340,1356210,1356211,1437610,1437611,1475680,1558690,1558691,1563120,1584790,1585870,1598850,1585871,1637471,1637470,1637472,1637530"

    if (typeof appIds === "undefined" || appIds === "") {
      console.error("Failed to fetch a list of steam appIds");
      return response
        .status(500)
        .json({ error: "Failed to fetch a list of steam appIds" });
    }

    const batchSteamAppPrices: Prisma.SteamAppPriceCreateManyInput[] = [];
    const batchAppErrors: AppError[] = [];

    for (const countryCode of countryCodes) {
      await fetchSteamAppPrice(
        countryCode,
        appIds,
        batchSteamAppPrices,
        batchAppErrors,
      );
    }

    await db.steamAppPrice.createMany({ data: batchSteamAppPrices });

    if (batchAppErrors.length === 0) {
      return response
        .status(200)
        .json({ success: true, data: batchSteamAppPrices });
    } else {
      console.error("Error fetching one or more apps:", batchAppErrors);
      return response
        .status(200)
        .json({
          success: true,
          data: batchSteamAppPrices,
          appErrors: batchAppErrors,
        });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return response.status(500).json({ error: "Failed to fetch data" });
  }
}

async function fetchSteamAppPrice(
  countryCode: string,
  appIds: string,
  steamAppPrices: Prisma.SteamAppPriceCreateManyInput[],
  appErrors: AppError[],
) {
  //name,price_overview,background,release_date
  const fetchUrl =
    env.STEAM_APP_DETAILS_URL +
    `?appids=${appIds}&cc=${countryCode}&filters=price_overview`;

  // console.log(`Fetching data from: ${fetchUrl}`);
  const result = await fetch(fetchUrl);
  const data = await result.text();

  if (data) {
    let reformatted = data.substring(1, data.length - 1);
    reformatted = '{"apps":[' + reformatted + "]}";
    reformatted = reformatted.replace(/"(\d+)":{/g, '{"appId":$1,');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const json: AppDetailsPriceOverview = JSON.parse(reformatted);

    for (const app of json.apps) {
      if (
        app.success !== undefined &&
        app.success &&
        app.data.price_overview !== undefined
      ) {
        let steamAppPrice = steamAppPrices.find(
          (p) => p.steamAppId === app.appId,
        );
        if (typeof steamAppPrice === "undefined") {
          steamAppPrice = {
            steamAppId: app.appId,
            timestamp: new Date(),
            priceUSD: 0,
            priceEUR: 0,
            priceGBP: 0,
            priceRUB: 0,
            discount: 0,
          };
          steamAppPrices.push(steamAppPrice);
        }

        switch (countryCode) {
          case "us":
            steamAppPrice.priceUSD = app.data.price_overview.final;
            steamAppPrice.discount = app.data.price_overview.discount_percent;
            break;
          case "de":
            steamAppPrice.priceEUR = app.data.price_overview.final;
            break;
          case "uk":
            steamAppPrice.priceGBP = app.data.price_overview.final;
            break;
          case "ru":
            steamAppPrice.priceRUB = app.data.price_overview.final;
            break;
        }
      } else {
        let appError = appErrors.find((e) => e.appId === app.appId);
        if (typeof appError === "undefined") {
          appError = {
            appId: app.appId,
            countryCode: [],
          };
          appErrors.push(appError);
        }
        appError.countryCode.push(countryCode);
      }
    }
  } else {
    const appError: AppError = {
      appId: 0,
      countryCode: [],
      data: data,
    };
    appError.countryCode.push(countryCode);
    appErrors.push(appError);
  }
}
