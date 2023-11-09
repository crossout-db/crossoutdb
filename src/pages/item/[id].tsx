import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import { GetServerSideProps, type NextPage } from "next";
import { getServerSideTranslations } from "~/lib/getServerTranslations";
import { useTranslation } from "next-i18next";

import Price from "~/components/crossoutstyle/Price";
import { calculateProfit, calculateROI } from "~/lib/priceCalc";
import PriceCard from "~/components/crossoutstyle/PriceCard";
import Item from "~/components/crossoutstyle/Item";
import rarityStyles from "~/lib/rarityStyles";
import StatsCard from "~/components/crossoutstyle/StatsCard";
import dayjs from "dayjs";
import SynergyCard from "~/components/crossoutstyle/SynergyCard";
import RecipeCard from "~/components/crossoutstyle/RecipeCard";
import { trpc } from "~/lib/trpc";

import { Prisma } from "@prisma/client";

type Props = {
  // Add custom props here
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const createRecipeTree = (depth: number): object | boolean => {
  if (depth <= 0) return true;

  return {
    include: {
      translations: true,
      recipes: {
        include: {
          ingredients: {
            include: {
              item: createRecipeTree(depth - 1),
            },
          },
        },
      },
    },
  };
};

const itemInclude = Prisma.validator<Prisma.ItemInclude>()({
    translations: true,
    type: {
      include: { translations: true },
    },
    category: {
      include: { translations: true },
    },
    faction: true,
    rarity: true,
    itemStats: {
      orderBy: {
        timestamp: "desc",
      },
      take: 1,
      // include: {
      //   user: {
      //     select: {
      //       name: true,
      //     },
      //   },
      //   release: true,
      // },
    },
    recipes: {
      include: {
        ingredients: {
          include: {
            item: createRecipeTree(7),
          },
        },
      },
    },
    market: {
      orderBy: {
        timestamp: "desc",
      },
      take: 1,
    },
    itemSynergies: {
      include: {
        synergy: {
          include: {
            synergyItems: {
              include: {
                item: {
                  include: {
                    rarity: true,
                    category: true,
                  },
                },
              },
            },
          },
        },
      },
    },
});

export type ItemFindUniqueOutput = Prisma.ItemGetPayload<{
  include: typeof itemInclude,
}>;

function findUniqueItem(item_id: number) {
  const { data } = trpc.item.findUnique.useQuery({
    where: { id: item_id },
    include: itemInclude,
  });

  return data;
}

export default function ItemPage() {
  const router = useRouter();
  const item_id = parseInt(router.query.id as string, 10);
  const data = findUniqueItem(item_id);
  // const { data } = trpc.item.findUnique.useQuery({
  //   where: { id: item_id },
  //   include: {
  //     type: true,
  //     category: true,
  //     faction: true,
  //     rarity: true,
  //     itemStats: {
  //       orderBy: {
  //         timestamp: "desc",
  //       },
  //       take: 1,
  //       include: {
  //         user: {
  //           select: {
  //             name: true,
  //           },
  //         },
  //         release: true,
  //       },
  //     },
  //     recipes: {
  //       include: {
  //         ingredients: {
  //           include: {
  //             item: createRecipeTree(3),
  //           },
  //         },
  //       },
  //     },
  //     market: {
  //       orderBy: {
  //         timestamp: "desc",
  //       },
  //       take: 1,
  //     },
  //     itemSynergies: {
  //       include: {
  //         synergy: {
  //           include: {
  //             synergyItems: {
  //               include: {
  //                 item: {
  //                   include: {
  //                     rarity: true,
  //                     category: true,
  //                   },
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // });
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  if (!data) return <></>;

  return (
    <div className="space-y-8">
      <div className="flex flex-row items-center space-x-2">
        <img
          src={"/images/items-highres/" + data.id + ".png"}
          width={128}
          height={128}
        />
        <div className="block space-y-2">

          <h1 className="text-3xl text-white">{data.translations.find((tf) => tf.languageCode === lang)?.value}</h1>
          <div className="space-x-1">
            <span
              className={`rounded-lg px-2 py-0.5 font-bold ${
                rarityStyles(data.rarityId).backgroundColor
              } ${data.rarityId === 1 ? "text-black" : "text-white"}`}
            >
              {data.rarity.name}
            </span>
            <span
              className={
                "rounded-lg bg-neutral-800 px-2 py-0.5 font-bold text-white"
              }
            >
              {data?.category.translations.find((tf) => tf.languageCode === lang)?.value}
            </span>
            <span
              className={
                "rounded-lg bg-neutral-800 px-2 py-0.5 font-bold text-white"
              }
            >
              {data?.type.translations.find((tf) => tf.languageCode === lang)?.value}
            </span>
            <span
              className={
                "rounded-lg bg-neutral-800 px-2 py-0.5 font-bold text-white"
              }
            >
              {data.faction.name}
            </span>
          </div>
        </div>
      </div>
      {data.market[0] && (
        <PriceCard
          sellPrice={data.market[0].sellPriceMin}
          buyPrice={data.market[0].buyPriceMax}
          sellOffers={data.market[0].sellOrders}
          buyOrders={data.market[0].buyOrders}
          marketFee={10}
          timestamp={data.market[0].timestamp}
        />
      )}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {data.itemStats[0] && <StatsCard data={data} />}
        {data.itemSynergies.length > 0 && <SynergyCard data={data} />}
      </div>
      <div className="flex flex-col text-white">
        <RecipeCard data={data} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await getServerSideTranslations(locale ?? "en", ["common", "model"])),
  },
});
