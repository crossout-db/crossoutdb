import { signIn, signOut, useSession } from "next-auth/react";
import { RouterOutputs } from "~/utils/api";

type ItemfindUniqueOutput =
  RouterOutputs["item"]["findUnique"];

interface CardProps {
  item: ItemfindUniqueOutput;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const { data: sessionData } = useSession();

  return (
    <div className="">
        <p>{item?.itemStats[0]?.description}</p>
    </div>
  );
};
