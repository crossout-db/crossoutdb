import { type GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import React from "react";

import { getServerSideTranslations } from "~/lib/getServerTranslations";
import { trpc } from "~/lib/trpc";
import { getServerAuthSession } from "~/server/auth";


type Props = {
  // Add custom props here
};

function LoadoutPage() {
  const { t } = useTranslation();
  const { data: packs, isLoading } = trpc.pack.findMany.useQuery({
    where: {
      active: true,
    },
  });

  if (isLoading || packs === undefined) {
    return <div>{t("loading")}</div>;
  }

  return (
    <>
      <section className=" container mx-auto flex flex-col justify-between gap-2 pb-[20rem]">
        <div className="w-full  px-[2.5rem]">
          <div className="about-cards flex flex-col gap-4 md:flex-row">

          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const session = await getServerAuthSession(context);

  const translateProps = await getServerSideTranslations(
    context.locale ?? "en",
    ["common"],
  );

  if (session?.user.role !== "ADMIN" && session?.user.role !== "CONTRIBUTOR") {
    return {
      props: {
        ...translateProps,
      },
      redirect: {
        destination: `/403`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...translateProps,
    },
  };
};

export default LoadoutPage;
