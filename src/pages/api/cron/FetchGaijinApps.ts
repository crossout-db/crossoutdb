import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import { db } from "~/server/db";
import { Pack, Prisma } from "@prisma/client";
import * as cheerio from "cheerio";

export default async function FetchGaijinApps(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const authHeader = request.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    console.error("Failed authorization");
    return response.status(401).json({ success: false });
  }
  try {
    let fetchUrl = env.GAIJIN_STORE_URL;
    const query = request.query;
    let pack: Pack[] = [];

    if (query.id) {
      fetchUrl = `${fetchUrl}?id=${Number(query.id)}`;
    } else {
      const title = query.title?.toString();
      fetchUrl = `${fetchUrl}?title=${title}`;
      const search = title?.replace("%28", "")
        .replace("%29", "")
        .replace(/[-–_]/g, "%")
        .replace(/%*[Pp]ack%\d/, "")
        .replace(/%*[Ss]tarter/, "")
        .replace(/[Cc]rossout[%]*/, "");
      pack = await db.$queryRawUnsafe(
        'SELECT * FROM "Pack" WHERE "name" ILIKE $1',
        `%${search}%`,
      );
    }
    const responseHTML = await fetch(fetchUrl);
    const htmlString = await responseHTML.text();
    const $ = cheerio.load(htmlString);
    if (typeof $ === "function" && $ !== null) {
      const id = Number($("div.js-cart__cart-item").attr("data-cart-item-id"));

      const priceElement = $("div.shop-price");
      let priceOriginal = 0;
      let price = 0;
      let discount = 0;
      if (priceElement) {
        // @ts-ignore
        price = Number(priceElement.text().match(/\$(\d+)/)[1]);
      } else {
      // @ts-ignore
      priceOriginal = Number($("div.shop-price__old").text().match(/\$(\d+)/)[1]);
      // @ts-ignore
      price = Number($("div.shop-price__new").text().match(/\$(\d+)/)[1]);
      discount = (priceOriginal > 0)
          ? (Math.round(
              ((priceOriginal - price) / priceOriginal) * 100,
            ))
          : 0;
      }

      response.statusCode = 200;
      return response.json({
        id: id,
        price: price,
        priceOriginal: priceOriginal,
        discount: discount,
        pack: pack[0]?.name,
        packId: pack[0]?.id,
        gaijinKey: pack[0]?.gaijinKey as number | null,
      });
    } else {
      throw new Error("Cheerio failed to load HTML");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return response.status(500).json({ error: "Failed to fetch data" });
  }
}
