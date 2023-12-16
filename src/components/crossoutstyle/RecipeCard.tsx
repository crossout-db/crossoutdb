import Recipe from "./Recipe";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import _, { min } from "lodash";
import PrimaryButton from "./PrimaryButton";
import { createRecipePath } from "~/lib/recipePath";
import RecipeSummary from "./RecipeSummary";
import { useTranslation } from "next-i18next";
import { ItemFindUniqueOutput } from "~/pages/item/[id]";
import { minGrZero } from "~/lib/minGrZero";
import RecipeBOM from "./RecipeBOM";
import Price from "./Price";

export type RecipeContextData = {
  condensedItem: { name: string; id: number; rarityId: number };
  recipePath: string;
  selectedRecipeId: number | undefined;
  craftCost: number;
  price: number;
  recipeQty: number;
  ingredientQty: number;
  active: boolean;
  action: "nothing" | "custom" | "craft" | "buy" | "sell";
}[];

type RecipeStateProvider = {
  value: RecipeContextData;
  setValue: Dispatch<SetStateAction<RecipeContextData>>;
};

export const RecipeContext = createContext<RecipeStateProvider | undefined>(
  undefined,
);

export type BOMContextData = {
  condensedItem: { name: string; id: number; rarityId: number };
  craftCost: number;
  buyPriceMax: number;
  sellPriceMin: number;
  price: number;
  quantity: number;
}[];

type BOMStateProvider = {
  value: BOMContextData;
  setValue: Dispatch<SetStateAction<BOMContextData>>;
};

export const BOMContext = createContext<BOMStateProvider | undefined>(
  undefined,
);

interface RecipeCardProps {
  data: ItemFindUniqueOutput;
}

export const resourceIds = [2870, 2871, 2872, 2873, 2874, 2875, 2876, 2877];
const mapRecipesRecursive = (
  item: ItemFindUniqueOutput,
  ingredientQty: number,
  recipePath: string,
): RecipeContextData => {
  if (!item) return [];

  let result: RecipeContextData = [];
  let recipeIdx = 0;
  if (item.recipes.length > 1) {
    if (
      (item.recipes[0]?.craftCost ?? 0) > (item.recipes[1]?.craftCost ?? 0) &&
      item.recipes[1]?.craftCost !== 0
    ) {
      recipeIdx = 1;
      console.log(item.recipes[1]?.itemId);
    }
  }
  const craftCost = item.recipes[recipeIdx]?.craftCost ?? 0;
  const price = minGrZero([
    item.buyPriceMax ?? 0,
    item.sellPriceMin ?? 0,
    craftCost,
  ]);
  const craftCostSelected =
    price === craftCost && !resourceIds.includes(item.id) ? true : false;

  result = [
    ...result,
    {
      condensedItem: {
        id: item.id,
        name: item.name,
        rarityId: item.rarityId,
      },
      recipePath: createRecipePath(recipePath, item.id),
      selectedRecipeId: item.recipes[recipeIdx]?.id,
      craftCost: craftCost,
      price: price,
      recipeQty: item.recipes[recipeIdx]?.quantity ?? 0,
      ingredientQty,
      active: craftCostSelected,
      action: "nothing",
    },
    ...item.recipes
      .map((recipe) =>
        recipe.ingredients.map((ingredient) =>
          mapRecipesRecursive(
            // @ts-ignore
            ingredient.item,
            ingredient.quantity,
            createRecipePath(recipePath, item.id),
          ),
        ),
      )
      .flat(2),
  ];
  return result;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ data }) => {
  const { t } = useTranslation();
  const [recipeState, setRecipeState] = useState(
    mapRecipesRecursive(data, 1, ""),
  );
  const [bomState, setBomState] = useState<BOMContextData>([]);

  if (!data) return <></>;

  const recipeStateProvider = {
    value: recipeState,
    setValue: setRecipeState,
  };

  const bomStateProvider = {
    value: bomState,
    setValue: setBomState,
  };

  return (
    <div className="space-y-2 text-white">
      <div className="flex flex-row items-baseline space-x-4 bg-neutral-800 p-4">
        <h1 className="text-2xl">{t("fields.recipe")}</h1>
        <PrimaryButton
          onClick={() =>
            setRecipeState(
              recipeState.map((x) => {
                if (!resourceIds.includes(x.condensedItem.id))
                  return { ...x, active: true };
                return x;
              }),
            )
          }
        >
          Expand all
        </PrimaryButton>
        <PrimaryButton
          onClick={() =>
            setRecipeState(recipeState.map((x) => ({ ...x, active: false })))
          }
        >
          Collapse all
        </PrimaryButton>
        <span>Craft Cost</span>
        <span>Buy Price Max</span>
        <span>Sell Price Min</span>
      </div>
      <RecipeContext.Provider value={recipeStateProvider}>
        <div className="space-y-2">
          <Recipe item={data} recipePath="" depth={0} />
        </div>
      </RecipeContext.Provider>

      <div className="flex flex-row items-baseline space-x-4 bg-neutral-800 p-4">
        <h1 className="text-2xl">{t("Recipe.BOM")}</h1>
      </div>

      <BOMContext.Provider value={bomStateProvider}>
        <div className="space-y-2">
          <RecipeBOM item={data} />
        </div>
      </BOMContext.Provider>
      <RecipeSummary />
    </div>
  );
};

export default RecipeCard;
