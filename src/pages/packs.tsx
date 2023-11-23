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

const packInclude = Prisma.validator<Prisma.PackInclude>()({
    items: {
      include: {
        item: true,
      },
    },
    packPrices: {
      orderBy: {
        timestamp: "desc",
      },
      take: 1,
    },
});
export type PackFindManyOutput = Prisma.PackGetPayload<{
  include: typeof packInclude,
}>;

const PacksPage: React.FC = () => {
  const { t } = useTranslation();
  const { data: packs, isLoading } = trpc.pack.findMany.useQuery({
    where: {
      active: true,
    },
    include: packInclude,
  });

  if (isLoading || packs === undefined) {
    return <div>{t("loading")}</div>;
  }

  return (
    <>
      <section className=" container mx-auto flex flex-col justify-between gap-2 pb-[20rem]">
        <div className="w-full  px-[2.5rem]">
          <div className="about-cards flex flex-col gap-4 md:flex-row">
            {packs.map((pack) => (
              <PackCard key={pack.id} pack={pack} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await getServerSideTranslations(locale ?? "en", [
      "common",
      "model",
      "db",
    ])),
  },
});

export default PacksPage;
