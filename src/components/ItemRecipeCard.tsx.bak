import { signIn, signOut, useSession } from "next-auth/react";
import { RouterOutputs } from "~/utils/api";

type ItemfindUniqueOutput = RouterOutputs["item"]["findUnique"];

interface ItemCardProps {
  item: ItemfindUniqueOutput;
}

export const ItemRecipeCard: React.FC<ItemCardProps> = ({ item }) => {
  const { data: sessionData } = useSession();

  return (
    <div className="">
      {item?.recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.id}</h3>
          <p>Ingredients:</p>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li
                className="w-full rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600"
                key={index}
              >
                {ingredient.item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
