import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import { type Prisma } from "@prisma/client";
import * as cheerio from "cheerio";
import { type IFetchAppError } from "./UpdatePackPrices";

// appIds = "6018,6072,6269,6295,6398,6715,6763,6825,6981,7080,5557,7243,5563,8290,8384,9235,9811,9921,10128,10146,11411,12842,12841,12840,12594,10848,11042,7116,10572,11056,11102,11050"

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
    if (!req.query.appId) {
      console.error("Missing query parameters");
      return res.status(400).json({ error: "Missing query parameters" });
    }

    const data = await FetchGaijinApps(req.query.appId as string);

    return res.status(200).json({
      success: true,
      data: data?.appPrice,
      error: data?.error,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: "Failed to fetch data" });
  }
}

export async function FetchGaijinApps(appId: string, packId?: number): Promise<{ appPrice?: Prisma.PackPriceCreateManyInput, error?: IFetchAppError }> {
  const fetchUrl = `${env.GAIJIN_STORE_URL}?id=${appId}`;

  console.log(`Fetching data from: ${fetchUrl}`);
  const responseHTML = await fetch(fetchUrl);
  const htmlString = await responseHTML.text();
  const $ = cheerio.load(htmlString);
  if (typeof $ === "function" && $ !== null) {
    const id = $("div.js-cart__cart-item").attr("data-cart-item-id");
    if (id !== appId) {
      console.error(`Scraped ID does not match query ID: ${appId}`);
      const error: IFetchAppError = {
        appId: appId,
        data: `Scraped ID does not match query ID: ${appId}`,
      };
      return { error };
    }

    const newPriceElement = $("div.shop-price__old");
    let priceOriginal = 0;
    let price = 0;
    let discount = 0;
    if (newPriceElement.length > 0) {
      priceOriginal = Math.round(
        Number(
          // @ts-ignore
          $("div.shop-price__old")
            .text()
            .match(/\$(\d+\.*\d*)/)[1],
        ) * 100,
      );
      price = Math.round(
        Number(
          // @ts-ignore
          $("div.shop-price__new")
            .text()
            .match(/\$(\d+\.*\d*)/)[1],
        ) * 100,
      );
      discount =
        priceOriginal > 0
          ? Math.round(((priceOriginal - price) / priceOriginal) * 100)
          : 0;
    } else {
      price = Math.round(
        Number(
          // @ts-ignore
          $("div.shop-price")
            .text()
            .match(/\$(\d+\.*\d*)/)[1],
        ) * 100,
      );
    }

    const appPrice: Prisma.PackPriceCreateManyInput = {
      packId: packId ?? 0,
      source: "GAIJIN",
      key: appId,
      currencyCode: "USD",
      price: price,
      priceOriginal: priceOriginal,
      discount: discount,
    };

    return { appPrice };
  }

  console.error(`Failed to scrape data: ${appId}`);
    const error: IFetchAppError = {
        appId: appId,
        data: `Failed to scrape data: ${appId}`,
    };
    return { error };  
}
