import { useCurrentUser } from "../lib/context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { GetServerSideProps, type NextPage } from "next";
import { getServerSideTranslations } from "~/lib/getServerTranslations";
import { useTranslation } from "next-i18next";
import { uniqBy } from "lodash";
import { trpc } from "~/lib/trpc";
import { Prisma } from "@prisma/client";
import MarketTableJson from "~/components/crossoutstyle/MarketTableJson";

type Props = {
  // Add custom props here
};

const itemArgs = Prisma.validator<Prisma.ItemDefaultArgs>()({
  include: {
    type: true,
    category: true,
    faction: true,
    rarity: true,
    market: {
      orderBy: {
        timestamp: "desc",
      },
      take: 1,
    },
  },
});

export type ItemFindManyWithMarketOutput = Prisma.ItemGetPayload<
  typeof itemArgs
>;

function findManyItem() {
  const { data } = trpc.item.findMany.useQuery({
    where: {
      saleable: true,
    },
    include: {
      type: true,
      category: true,
        faction: true,
      rarity: true,
      market: {
        orderBy: {
          timestamp: "desc",
        },
        take: 1,
      },
    },
  });

  return data;
}

const Market: NextPage = () => {
  const currentUser = useCurrentUser();
  const router = useRouter();
  const { status } = useSession();
  const data = findManyItem();
  const { t } = useTranslation();

  if (!data) {
    return <div className="block overflow-auto">{t("loading")}</div>;
  }

  const categories = {
    categories: uniqBy(
      data.map((item) => {
        return {
          xodbId: item.category.id,
          order: item.category.id,
          LocNames: [{ name: item.category.name }],
        };
      }),
      (category) => category.xodbId,
    ).filter((category) => category.xodbId !== 0),
  };
  const rarities = {
    rarities: uniqBy(
      data.map((item) => {
        return {
          xodbId: item.rarity.id,
          order: item.rarity.id,
          LocNames: [{ name: item.rarity.name }],
        };
      }),
      (rarity) => rarity.xodbId,
    ),
  };

  return (
    <MarketTableJson
      data={data}
      categories={categories}
      rarities={rarities}
    />
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await getServerSideTranslations(locale ?? "en", ["common", "model", "db"])),
  },
});

export default Market;
