import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import { type Pack, type Prisma } from "@prisma/client";
import { type IFetchAppError } from "./UpdatePackPrices";

export interface IAppDetailsPriceOverview {
  apps: IApp[];
}

export interface IApp {
  appId: string;
  success: boolean;
  data: IData;
}

export interface IData {
  price_overview: IPriceOverview;
}

export interface IPriceOverview {
  currency: string;
  initial: number;
  final: number;
  discount_percent: number;
  initial_formatted: string;
  final_formatted: string;
}

// countryCodes = ["us", "de", "uk", "ru"]
// appIds = "759590,783870,764460,806120,809740,708490,853170,719670,708500,878630,643740,812760,887050,893760,960290,1034510,1034511,1049120,1049121,1059100,1076740,1076741,1141790,1158240,1158241,1192400,1193840,1015950,1254240,1276340,1356210,1356211,1437610,1437611,1475680,1558690,1558691,1563120,1584790,1585870,1598850,1585871,1637471,1637470,1637472,1637530,2126140,2620890,2620910,2620900,2470520,1894060,1946901,1792900,1953610,1968801,1946903"

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
    if (!req.query.countryCode || !req.query.appIds) {
      console.error("Missing query parameters");
      return res.status(400).json({ error: "Missing query parameters" });
    }

    const data = await FetchSteamApps(
      req.query.countryCode as string,
      req.query.appIds as string,
    );

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

export async function FetchSteamApps(
  countryCode: string,
  appIds: string,
  packs?: Pack[],
) {
  const appPrices: Prisma.PackPriceCreateManyInput[] = [];
  const errors: IFetchAppError[] = [];
  //Additional filters: name,price_overview,background,release_date
  const fetchUrl =
    env.STEAM_APP_DETAILS_URL +
    `?filters=price_overview&cc=${countryCode}&appids=${appIds}`;

  console.log(`Fetching data from: ${fetchUrl}`);
  const result = await fetch(fetchUrl);
  const data = await result.text();

  if (data) {
    let reformatted = data.substring(1, data.length - 1);
    reformatted = '{"apps":[' + reformatted + "]}";
    reformatted = reformatted.replace(/"(\d+)":{/g, '{"appId":$1,');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const json: IAppDetailsPriceOverview = JSON.parse(reformatted);

    for (const app of json.apps) {
      if (
        app.success !== undefined &&
        app.success &&
        app.data.price_overview !== undefined
      ) {
        const pack = packs?.find((p) => p.steamKey === app.appId.toString());
        const packPrice: Prisma.PackPriceCreateManyInput = {
          source: "STEAM",
          //TODO: Why do I have to surround this with quotes?
          key: `${app.appId}`,
          packId: pack?.id ?? 0,
          currencyCode: app.data.price_overview.currency,
          price: app.data.price_overview.final,
          priceOriginal: app.data.price_overview.initial,
          discount: app.data.price_overview.discount_percent,
          timestamp: new Date(),
        };
        appPrices.push(packPrice);
      } else {
        const appError: IFetchAppError = {
          appId: app.appId,
          data: JSON.stringify(app.data),
        };
        console.error(`Failed to fetch app: ${app.appId}`);
        errors.push(appError);
      }
    }
    return { appPrices, errors };
  } else {
    const appError: IFetchAppError = {
        appId: "",
        data,
      };
      console.error(`Failed to fetch data`);
      errors.push(appError);

    return { errors };
  }
}
