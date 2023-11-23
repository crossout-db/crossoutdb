import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import { db } from "~/server/db";
import { Prisma } from "@prisma/client";

export interface AppDetailsPriceOverview {
  apps: App[];
}

export interface App {
  appId: string;
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
  appId: string;
  countryCode: string[];
  data?: string;
}

export default async function UpdatePackPrices(
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
    const packs = await db.pack.findMany({});
    const appIds = packs?.map((pack) => Number(pack.steamKey)).join(",");

    // const appIds = "759590,783870,764460,806120,809740,708490,853170,719670,708500,878630,643740,812760,887050,893760,960290,1034510,1034511,1049120,1049121,1059100,1076740,1076741,1141790,1158240,1,1158241,1192400,1193840,2,1015950,1254240,1276340,1356210,1356211,1437610,1437611,1475680,1558690,1558691,1563120,1584790,1585870,1598850,1585871,1637471,1637470,1637472,1637530"

    if (typeof appIds === "undefined" || appIds === "") {
      console.error("Failed to fetch a list of steam appIds");
      return response
        .status(500)
        .json({ error: "Failed to fetch a list of steam appIds" });
    }

    const batchPackPrices: Prisma.PackPriceCreateManyInput[] = [];
    const batchAppErrors: AppError[] = [];

    for (const countryCode of countryCodes) {
      await fetchPackPrice(
        countryCode,
        appIds,
        batchPackPrices,
        batchAppErrors,
      );
    }

    for (const packPrice of batchPackPrices) {
      const pack = packs.find((p) => p.steamKey === packPrice.key);
      if (typeof pack !== "undefined") {
        packPrice.packId = pack.id;
      } else {
        console.error(
          `Failed to find pack for steamKey: ${packPrice.key}`,
        );
      }
    }

    await db.packPrice.createMany({ data: batchPackPrices });

    if (batchAppErrors.length === 0) {
      return response
        .status(200)
        .json({ success: true, data: batchPackPrices });
    } else {
      console.error("Error fetching one or more apps:", batchAppErrors);
      return response
        .status(200)
        .json({
          success: true,
          data: batchPackPrices,
          appErrors: batchAppErrors,
        });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return response.status(500).json({ error: "Failed to fetch data" });
  }
}

async function fetchPackPrice(
  countryCode: string,
  appIds: string,
  packPrices: Prisma.PackPriceCreateManyInput[],
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
        let packPrice = packPrices.find(
          (p) => p.key === app.appId,
        );
        if (typeof packPrice === "undefined") {
          packPrice = {
            source: "STEAM",
            //TODO: Why do I have to surround this with quotes?
            key: `${app.appId}`,
            packId: 0,
            currencyCode: countryCode,
            price: 0,
            priceOriginal: null,
            discount: null,
            timestamp: new Date(),
          };
          packPrices.push(packPrice);
        }

        packPrice.price = app.data.price_overview.final;
        packPrice.discount = app.data.price_overview.discount_percent;

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
      appId: "",
      countryCode: [],
      data: data,
    };
    appError.countryCode.push(countryCode);
    appErrors.push(appError);
  }
}
