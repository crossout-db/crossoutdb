import WithNavBar from "../components/WithNavBar";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { getEnhancedPrisma } from "../server/enhanced-db";
import { useCurrentUser } from "../lib/context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { MarketTable } from "~/components/MarketTable";
import { useFindManyPack } from "zenstack/generated/swr/hooks";
import UpdatePackPrices from "./api/cron/UpdatePackPrices";
import { trpc } from "~/lib/trpc";

const Home: NextPage = () => {
  const currentUser = useCurrentUser();
  const router = useRouter();
  const { status } = useSession();
  // const { data: packs } = useFindManyPack({select: {steamAppID: true}});
  // const { data: packs } = trpc.pack.findMany.useQuery({
  //   select: { steamAppId: true },
  // });
  // const appIds = packs?.map((pack) => pack.steamAppId).join(",");
  // void UpdatePackPrices();

  // const handleClick = (): void => {
  //   UpdatePackPrices().catch((error) => {
  //     console.error("Failed to update prices:", error);
  //   });
  // };

  return (
    <WithNavBar>
      <div className="mt-8 flex w-full flex-col items-center text-center">
        {currentUser && (
          <h1 className="text-2xl text-gray-800">Welcome {currentUser.name}!</h1>
        )}

        <div className="w-full p-8">
          <div>{/* <CalcCraftingCosts /> */}</div>
          {/* <div>{appIds}</div> */}
          {/* <button onClick={handleClick}>Update Prices</button> */}
          <div className="block overflow-auto">
            {/* <MarketTable /> */}
          </div>
        </div>
      </div>
    </WithNavBar>
  );
};

export default Home;
