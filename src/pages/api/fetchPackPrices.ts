import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import type { Pack, PackPrice } from "@prisma/client";
import { trpc } from '~/lib/trpc';

import { useFindManyPack } from "zenstack/generated/swr/hooks";
import { getEnhancedPrisma } from "~/server/enhanced-db";

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

export interface AppErrors {
  countryCode: string;
  appId: number;
  data: string;
}


export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  try {
    const countryCodes = ["us", "de", "uk", "ru"];
    const appErrors: AppErrors[] = [];
    const packPrices: PackPrice[] = [];
    const appIds = request.query.appIds as string;
    if (typeof appIds === "undefined" || appIds === "") {
      console.error("No packs requested");
      response.status(500).json({ error: "No packs requested" });
      return;
    }
    console.log(`appIds: ${JSON.stringify(request.query)}`);

    for (const countryCode of countryCodes) {

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
            let packPrice = packPrices.find((p) => p.packId === app.appId);
            if (typeof packPrice === "undefined") {
              packPrice = {
                id: 0,
                packId: app.appId,
                timestamp: new Date(),
                priceUSD: 0,
                priceEUR: 0,
                priceGBP: 0,
                priceRUB: 0,
                discount: 0,
              };
              packPrices.push(packPrice);
            }

            switch (countryCode) {
              case "us":
                packPrice.priceUSD = app.data.price_overview.final;
                packPrice.discount = app.data.price_overview.discount_percent;
                break;
              case "de":
                packPrice.priceEUR = app.data.price_overview.final;
                break;
              case "uk":
                packPrice.priceGBP = app.data.price_overview.final;
                break;
              case "ru":
                packPrice.priceRUB = app.data.price_overview.final;
                break;
            }
          } else {
            appErrors.push({
              countryCode: countryCode,
              appId: app.appId,
              data: data,
            });
          }
        }
      } else {
        appErrors.push({ countryCode: countryCode, appId: 0, data: data });
      }
    }

    if (appErrors.length === 0) {
      response.status(200).json({ success: true, data: packPrices });
    } else {
      console.error("Error fetching one of the apps:", appErrors);
      response.status(200).json({ success: true, data: packPrices });
      // response.status(500).json({ error: "Failed to fetch one of the apps" });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).json({ error: "Failed to fetch data" });
  }
}
