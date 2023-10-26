import WithNavBar from "../components/WithNavBar";
import { useCurrentUser } from "../lib/context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { GetServerSideProps, type NextPage } from "next";
import { getServerTranslations } from "~/lib/getServerTranslations";
import { useTranslation } from "next-i18next";
import MarketTable from "~/components/crossoutstyle/MarketTable";
import { api } from "~/utils/api";
import { uniqBy } from "lodash";

type Props = {
  // Add custom props here
}

const Market: NextPage = () => {
  const currentUser = useCurrentUser();
  const router = useRouter();
  const { status } = useSession();
  const { data, isLoading } = api.item.findManyWithMarket.useQuery({});
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
          order: item.rarity.order,
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
    ...(await getServerTranslations(locale ?? 'en', [
      'common','model'
    ])),
  },
})

export default Market;
