import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Tab } from "@headlessui/react";

import { api } from "~/utils/api";

import WithNavBar from "~/components/WithNavBar";
import { ItemCard } from "~/components/itemCard";
import { ItemStatCard } from "~/components/itemStatsCard";
import { ItemRecipeCard } from "~/components/itemRecipeCard";
import { ItemMarketCard } from "~/components/itemMarketCard";
import { ItemSynergyCard } from "~/components/itemSynergy";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ItemPage() {
  const router = useRouter();
  const item_id = parseInt(router.query.id as string, 10);
  const { data } = api.item.findUnique.useQuery({ where: { id: item_id } });

  return (
    <WithNavBar>
      <div className="w-full p-8">
        <div className="flex flex-col bg-blue-50 md:flex-row">
          <div className="w-full md:w-2/3">
            <div className="w-200 card bg-base-100 shadow-xl">
              <div className="card-body">
                {data != undefined && <ItemCard item={data} />}

                <div className="divider" />

                {data != undefined && <ItemStatCard item={data} />}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            {data != undefined && <ItemMarketCard item={data} />}
            {data != undefined && <ItemSynergyCard item={data} />}
          </div>
        </div>

        <div className="w-200 card bg-base-100 shadow-xl">
          <div className="card-body">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white",
                    )
                  }
                >
                  Crafting
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white",
                    )
                  }
                >
                  Market
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white",
                    )
                  }
                >
                  History
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel>
                  {data != undefined && <ItemRecipeCard item={data} />}
                </Tab.Panel>
                <Tab.Panel>Market</Tab.Panel>
                <Tab.Panel>History</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </WithNavBar>
  );
}
