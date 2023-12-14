import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { PackFindManyOutput } from "~/pages/packs";
import Item from "./crossoutstyle/Item";
import { iteratee, now } from "lodash";
import Image from "next/image";
import Link from "next/link";
import Price from "./crossoutstyle/Price";
import dayjs, { Dayjs } from "dayjs";

interface PackProps {
  pack: PackFindManyOutput;
}

const PackCard: React.FC<PackProps> = ({ pack }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  let sellTotal = 0;
  let buyTotal = 0;

  return (
    <div
      key={pack.id}
      className="card-item-div mt-2 flex min-h-[260px] w-full min-w-[360px] max-w-screen-md cursor-pointer flex-col items-center rounded-xl bg-white px-2 py-2 text-center shadow-2xl"
    >
      <h2 className="card-title">{pack.name}</h2>
      <h2 className="card-title">{pack.steamKey}</h2>
      <Link
        href={`https://store.steampowered.com/app/${pack.steamKey}`}
        target="_blank"
      >
        <Image
          src={`https://cdn.akamai.steamstatic.com/steam/apps/${pack.steamKey}/header.jpg`}
          alt={pack.name}
          width={230}
          height={108}
        />
      </Link>
      <div className="flex w-full flex-row">
        <ul>
          {pack.items.map((packItem) => {
            const item = packItem.item;
            sellTotal += item.sellPriceMin ?? 0;
            buyTotal += item.buyPriceMax ?? 0;
            return (
              <li key={item.id}>
                <div
                  key={item.id}
                  className="col-xs-3 col-sm-3 col-md-3 col-lg-2"
                ></div>
                <Item
                  id={item.id}
                  name={
                    item.translations.find((tf) => tf.languageCode === lang)
                      ?.value ?? item.name
                  }
                  rarityId={item.rarityId}
                  size="small"
                />
                <Price value={item.sellPriceMin ?? 0} />
                <Price value={item.buyPriceMax ?? 0} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex w-full flex-row">
        <div className="flex flex-col">Item Sum:</div>
        <div className="flex flex-col">
          <h2 className="card-title">Sell Total: <Price value={sellTotal ?? 0} /></h2>
        </div>
        <div className="flex flex-col">
          <h2 className="card-title">Buy Total: <Price value={buyTotal ?? 0} /></h2>
        </div>
      </div>
      <div className="flex w-full flex-row">
        <div className="flex flex-col">Steam Price:</div>
        <div className="flex flex-col">
          <h2 className="card-title">{pack.packPrices[0]?.price ?? 0}</h2>
        </div>
        <div className="flex flex-col">
          <h2 className="card-title">
            {pack.packPrices[0]?.discount ?? 0}% off
          </h2>
        </div>
      </div>
      <div className="flex w-full flex-row">
        Updated {pack.packPrices[0]?.timestamp.toISOString() ?? -1}
      </div>
    </div>
  );
};

export default PackCard;
