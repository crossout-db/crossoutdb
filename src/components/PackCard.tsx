import React from "react";
import { useTranslation } from "next-i18next";
import { PackFindManyOutput } from "~/pages/packs";
import Item from "./crossoutstyle/Item";
import { iteratee } from "lodash";
import Image from "next/image";

interface PackProps {
  pack: PackFindManyOutput;
}

const PackCard: React.FC<PackProps> = ({ pack }) => {
  const { t } = useTranslation(["db"]);
  return (
    <div className="w-200 card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{pack.name}</h2>
        <h2 className="card-title">{pack.steamAppId}</h2>
        <Image
          src={`https://cdn.akamai.steamstatic.com/steam/apps/${pack.steamAppId}/header.jpg`}
          alt={pack.name}
          width={230}
          height={108}
        />
        <ul>
          {pack.items.map((packItem) => (
            //   <li key={index}>{item}</li>
            <Item
              key={packItem.id}
              id={packItem.id}
              name={t(`db:${packItem.item.name}`)}
              rarityId={packItem.item.rarityId}
              size="small"
            />
          ))}
        </ul>
        <p>Price: ${pack.steamAppPrices[0]?.priceUSD}</p>
      </div>
    </div>
  );
};

export default PackCard;
