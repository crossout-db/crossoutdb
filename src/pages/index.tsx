import { Prisma } from "@prisma/client";
import { uniqBy } from "lodash";
import { type GetServerSideProps, type NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";

import MarketTable from "@components/home/MarketTable";
import { useCurrentUser } from "~/lib/context";
import { getServerSideTranslations } from "~/lib/getServerTranslations";
import { trpc } from "~/lib/trpc";


type Props = {
  // Add custom props here
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
  market: {
    orderBy: {
      timestamp: "desc",
    },
    take: 1,
  },
});

export type ItemFindManyWithMarketOutput = Prisma.ItemGetPayload<{
  include: typeof itemInclude,
}>;

const Market: NextPage = () => {
  const currentUser = useCurrentUser();
  const router = useRouter();
  const { status } = useSession();
  const { t } = useTranslation();

  const { data } = trpc.item.findMany.useQuery({
    where: {
        active: true,
    },
    include: itemInclude,
  });

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
    <MarketTable data={data} categories={categories} rarities={rarities} />
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await getServerSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Market;
