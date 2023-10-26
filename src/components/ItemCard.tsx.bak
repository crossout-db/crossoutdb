import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { RouterOutputs } from "~/utils/api";

type ItemfindUniqueOutput = RouterOutputs["item"]["findUnique"];

interface ItemCardProps {
  item: ItemfindUniqueOutput;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { data: sessionData } = useSession();

  return (
    <div className="">
      <Image
        src={"/images/items-highres/" + item?.id + ".png"}
        alt={item?.name ?? "Item not found"}
        width={128}
        height={0}
        className="h-auto"
      />

      <h2 className="card-title">{item?.name}</h2>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">{item?.type.name}</div>
        <div className="badge badge-outline">{item?.category.name}</div>
        <div className="badge badge-outline">{item?.rarity.name}</div>
        <div className="badge badge-outline">{item?.faction.name}</div>
      </div>
    </div>
  );
};
