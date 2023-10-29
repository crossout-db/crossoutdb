import { useCurrentUser } from "../lib/context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { GetServerSideProps, type NextPage } from "next";
import { getServerTranslations } from "~/lib/getServerTranslations";
import { useTranslation } from "next-i18next";
import MarketTable from "~/components/crossoutstyle/MarketTable";
import { uniqBy } from "lodash";
import { trpc } from "~/lib/trpc";
import { Prisma } from "@prisma/client";

type Props = {
  // Add custom props here
};

const itemArgs = Prisma.validator<Prisma.ItemDefaultArgs>()({
  include: {
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
  },
});

export type ItemFindManyWithMarketOutput = Prisma.ItemGetPayload<
  typeof itemArgs
>;

function findManyItem() {
  const { data } = trpc.item.findMany.useQuery({
    include: {
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
    <MarketTable
      data={data}
      categories={categories}
      rarities={rarities}
      lang="en"
    />
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await getServerTranslations(locale ?? "en", ["common", "model"])),
  },
});

export default Market;
