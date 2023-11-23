import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import { db } from "~/server/db";
import { Pack, Prisma } from "@prisma/client";
import * as cheerio from "cheerio";

export default async function UpdateGaijinStore(
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
    let packUpdated = false;

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
      console.log(pack);
    }
    const responseHTML = await fetch(fetchUrl);
    const htmlString = await responseHTML.text();
    const $ = cheerio.load(htmlString);
    if (typeof $ === "function" && $ !== null) {
      // @ts-ignore
      const id = Number($("div.js-cart__cart-item").attr("data-cart-item-id"));

      const priceElement = $("div.shop-price");
      let priceOld = 0;
      let priceCurrent = 0;
      let discount = 0;
      if (priceElement) {
        // @ts-ignore
        priceCurrent = Number(priceElement.text().match(/\$(\d+)/)[1]);
      } else {
      // @ts-ignore
      priceOld = ($("div.shop-price__old").text().match(/\$(\d+)/)[1]);
      // @ts-ignore
      priceCurrent = Number($("div.shop-price__new").text().match(/\$(\d+)/)[1]);
      discount = (priceOld > 0)
          ? (Math.round(
              ((priceOld - priceCurrent) / priceOld) * 100,
            ))
          : 0;
      }

      if (
        pack[0] &&
        request.query.updatePack == "true" &&
        pack[0].gaijinId == null
      ) {
        await db.pack.update({
          where: { id: pack[0].id },
          data: {
            gaijinId: Number(id),
          },
        });
        packUpdated = true;
      }

      response.statusCode = 200;
      return response.json({
        id: id,
        priceOld: priceOld,
        priceCurrent: priceCurrent,
        discount: discount,
        pack: pack[0]?.name,
        packId: pack[0]?.id,
        gaijinId: pack[0]?.gaijinId as number | null,
        packUpdated: packUpdated,
      });
    } else {
      throw new Error("Cheerio failed to load HTML");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return response.status(500).json({ error: "Failed to fetch data" });
  }
}
