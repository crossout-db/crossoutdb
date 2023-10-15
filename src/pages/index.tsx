import WithNavBar from "../components/WithNavBar";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { getEnhancedPrisma } from "../server/enhanced-db";
import { useCurrentUser } from "../lib/context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { MarketTable } from "~/components/marketTable";
import { useFindManyPack } from "zenstack/generated/swr/hooks";

const Home: NextPage = () => {
  const currentUser = useCurrentUser();
  const router = useRouter();
  const { status } = useSession();
  const { data: packs } = useFindManyPack({select: {steamAppID: true}});
  const appIds = packs?.map((pack) => pack.steamAppID).join(",");

  return (
    <WithNavBar>
      <div className="mt-8 flex w-full flex-col items-center text-center">
        {currentUser && (
          <h1 className="text-2xl text-gray-800">Welcome {currentUser.name}!</h1>
        )}

        <div className="w-full p-8">
          <div>{/* <CalcCraftingCosts /> */}</div>
          <div>{JSON.stringify(appIds)}</div>
          <div className="block overflow-auto">
            <MarketTable />
          </div>
        </div>
      </div>
    </WithNavBar>
  );
};

export default Home;
