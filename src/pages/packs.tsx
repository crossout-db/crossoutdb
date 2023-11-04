import { Prisma } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import React from "react";
import PackCard from "~/components/PackCard";
import { getServerSideTranslations } from "~/lib/getServerTranslations";
import { trpc } from "~/lib/trpc";

type Props = {
  // Add custom props here
};

const packArgs = Prisma.validator<Prisma.PackDefaultArgs>()({
  include: {
    items: {
      include: {
        item: true,
      },
    },
    steamAppPrices: {
      orderBy: {
        timestamp: "desc",
      },
      take: 1,
    },
  },
});
export type PackFindManyOutput = Prisma.PackGetPayload<typeof packArgs>;

const PacksPage: React.FC = () => {
  const { t } = useTranslation();
  const { data: packs, isLoading } = trpc.pack.findMany.useQuery({
    where: {
      active: true,
    },
    include: {
      items: {
        include: {
          item: true,
        },
      },
        steamAppPrices: {
        orderBy: {
          timestamp: "desc",
        },
        take: 1,
      },
    },
  });

  if (isLoading || packs === undefined) {
    return <div>{t("loading")}</div>;
  }

  return (
    <div>
      {packs.map((pack) => (
        <PackCard key={pack.id} pack={pack} />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await getServerSideTranslations(locale ?? "en", ["common", "model", "db"])),
  },
});

export default PacksPage;
