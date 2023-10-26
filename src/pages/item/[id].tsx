import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Tab } from "@headlessui/react";

import { RouterOutputs, api } from "~/utils/api";

import Price from "~/components/crossoutstyle/Price";
import { calculateProfit, calculateROI } from "~/lib/priceCalc";
import PriceCard from "~/components/crossoutstyle/PriceCard";
import Item from "~/components/crossoutstyle/Item";
import rarityStyles from "~/lib/rarityStyles";
import StatsCard from "~/components/crossoutstyle/StatsCard";
import dayjs from "dayjs";
import SynergyCard from "~/components/crossoutstyle/SynergyCard";
import RecipeCard from "~/components/crossoutstyle/RecipeCard";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function ItemPage() {
    const router = useRouter();
    const item_id = parseInt(router.query.id as string, 10);
    const { data } = api.item.findUnique.useQuery({ where: { id: item_id } });

    if (!data)
        return <></>

    return (
        <div className="space-y-8">
            <div className="flex flex-row items-center space-x-2">
                <img src={"/images/items-highres/" + data.id + ".png"} width={128} height={128} />
                <div className="block space-y-2">
                    <h1 className="text-white text-3xl">{data.name}</h1>
                    <div className="space-x-1">
                        <span className={`rounded-lg px-2 py-0.5 font-bold ${rarityStyles(data.rarityId).backgroundColor} ${data.rarityId === 1 ? 'text-black' : 'text-white'}`}>{data.rarity.name}</span>
                        <span className={"text-white rounded-lg px-2 py-0.5 font-bold bg-neutral-800"}>{data.category.name}</span>
                        <span className={"text-white rounded-lg px-2 py-0.5 font-bold bg-neutral-800"}>{data.type.name}</span>
                        <span className={"text-white rounded-lg px-2 py-0.5 font-bold bg-neutral-800"}>{data.faction.name}</span>
                    </div>
                </div>
            </div>
            {data.market[0] &&
                <PriceCard
                    sellPrice={data.market[0].sellPriceMin}
                    buyPrice={data.market[0].buyPriceMax}
                    sellOffers={data.market[0].sellOrders}
                    buyOrders={data.market[0].buyOrders}
                    marketFee={10}
                    timestamp={data.market[0].timestamp}
                />
            }
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
                {data.itemStats[0] &&
                    <StatsCard data={data} />
                }
                {data.itemSynergies.length > 0 &&
                    <SynergyCard data={data} />
                }
            </div>
            <div className="flex flex-col text-white">
                <RecipeCard data={data} />
            </div>
        </div>
    );
}
