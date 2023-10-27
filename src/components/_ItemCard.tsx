import { signIn, signOut, useSession } from "next-auth/react";
import { ItemFindUniqueOutput } from "~/pages/item/[id]";

interface CardProps {
  item: ItemFindUniqueOutput;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const { data: sessionData } = useSession();

  return (
    <div className="">
        <p>{item?.itemStats[0]?.description}</p>
    </div>
  );
};
