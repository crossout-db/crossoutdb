import { useTranslation } from "next-i18next";
import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import PrimaryButton from "@components/PrimaryButton";
import { minGrZero } from "~/lib/minGrZero";
import { createRecipePath } from "~/lib/recipePath";
import { type ItemFindUniqueOutput } from "~/pages/item/[id]";

import RecipeCardCartRow from "./RecipeCardCartRow";
import RecipeCardSummary from "./RecipeCardSummary";
import RecipeCardTree from "./RecipeCardTree";

export type RecipeRecord = {
  condensedItem: { name: string; id: number; rarityId: number };
  recipePath: string;
  parentPath: string;
  parentRecipeQty: number;
  parentRecipeId: number | undefined;
  selectedRecipeId: number | undefined;
  craftCost: number;
  buyPriceMax: number;
  sellPriceMin: number;
  price: number;
  recipeQty: number;
  ingredientQty: number;
  active: boolean;
  action: "nothing" | "custom" | "craft" | "buy" | "sell";
};

export type CartRecord = {
  condensedItem: { name: string; id: number; rarityId: number };
  craftCost: number;
  buyPriceMax: number;
  sellPriceMin: number;
  price: number;
  quantity: number;
  totalCost: number;
};

export interface RecipeContextData {
  recipeRecords: RecipeRecord[];
  cartRecords: CartRecord[];
  setRecipeRecords: Dispatch<SetStateAction<RecipeRecord[]>>;
  setCartRecords: Dispatch<SetStateAction<CartRecord[]>>;
}

export const RecipeContext = createContext<RecipeContextData | undefined>(
  undefined,
);

interface RecipeCardProps {
  data: ItemFindUniqueOutput;
}

export const resourceIds = [2870, 2871, 2872, 2873, 2874, 2875, 2876, 2877];
const mapRecipesRecursive = (
  lang: string,
  item: ItemFindUniqueOutput,
  ingredientQty: number,
  parentPath: string,
  parentRecipeQty: number,
  parentActive: boolean,
  parentRecipeId?: number,
): RecipeRecord[] => {
  if (!item) return [];

  let result: RecipeRecord[] = [];
  let recipeIdx = 0;
  if (item.recipes.length > 1) {
    if (
      (item.recipes[0]?.craftCost ?? 0) > (item.recipes[1]?.craftCost ?? 0) &&
      item.recipes[1]?.craftCost !== 0
    ) {
      recipeIdx = 1;
    }
  }
  const recipePath = createRecipePath(parentPath, item.id);
  const recipeQty = item.recipes[recipeIdx]?.quantity ?? 1;
  const selectedRecipeId = item.recipes[recipeIdx]?.id;
  const craftCost =
    (item.recipes[recipeIdx]?.craftCost ?? 0) /
    (item.recipes[recipeIdx]?.quantity ?? 1);
  const buyPriceMax = item.buyPriceMax ?? 0;
  const sellPriceMin = item.sellPriceMin ?? 0;
  const price = minGrZero([sellPriceMin, craftCost]);
  const craftCostSelected =
    price === craftCost && craftCost !== 0 && !resourceIds.includes(item.id)
      ? parentActive
      : false;

  const action = (() => {
    if (craftCostSelected) return "craft";
    if (parentActive) return "buy";
    return "nothing";
  })();

  result = [
    ...result,
    {
      condensedItem: {
        id: item.id,
        name:
          item.translations?.find((tf) => tf.languageCode === lang)?.value ??
          item.name,
        rarityId: item.rarityId,
      },
      recipePath: recipePath,
      parentPath: parentPath,
      parentRecipeQty: parentRecipeQty,
      parentRecipeId: parentRecipeId,
      selectedRecipeId: selectedRecipeId,
      craftCost: craftCost,
      buyPriceMax: buyPriceMax,
      sellPriceMin: sellPriceMin,
      price: price,
      recipeQty: recipeQty,
      ingredientQty,
      active: craftCostSelected,
      action: action,
    },
    ...item.recipes
      .map((recipe) =>
        recipe.ingredients.map((ingredient) =>
          mapRecipesRecursive(
            lang,
            // @ts-ignore
            ingredient.item,
            ingredient.quantity,
            recipePath,
            Math.ceil(ingredientQty / recipeQty),
            craftCostSelected,
            recipe.id,
          ),
        ),
      )
      .flat(2),
  ];
  return result;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ data }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [recipeRecords, setRecipeRecords] = useState(
    mapRecipesRecursive(lang, data, 1, "", 1, true),
  );
  const [cartRecords, setCartRecords] = useState<CartRecord[]>([]);

  useEffect(() => {
    setCartRecords(getCartRecords(recipeRecords));
  }, [recipeRecords]);

  const sortedCartRecords = [...cartRecords].sort(
    (a, b) => a.condensedItem.id - b.condensedItem.id,
  );

  if (!data) return <></>;

  const json = JSON.stringify(recipeRecords, null, 2);

  return (
    <div className="space-y-2 text-white">
      <div className="grid space-x-1 bg-neutral-800 py-4 md:grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-row items-baseline space-x-4 px-4">
          <h1 className="text-2xl">{t("pages.item.recipe.title")}</h1>
          <PrimaryButton
            onClick={() =>
              setRecipeRecords(
                recipeRecords.map((x) => {
                  if (!resourceIds.includes(x.condensedItem.id))
                    return { ...x, active: true };
                  return x;
                }),
              )
            }
          >
            {t("buttons.expandAll")}
          </PrimaryButton>
          <PrimaryButton
            onClick={() =>
              setRecipeRecords(
                recipeRecords.map((x) => ({ ...x, active: false })),
              )
            }
          >
            {t("buttons.collapseAll")}
          </PrimaryButton>
        </div>
        <div></div>
        <div className="flex flex-row justify-end space-x-2 p-2">
          <span className="w-28 px-2 text-center">
            {t("pages.item.recipe.craftCost")}
          </span>
          <span className="w-28 px-2 text-center">
            {t("pages.item.recipe.buyPrice")}
          </span>
          <span className="w-28 px-2 text-center">
            {t("pages.item.recipe.sellPrice")}
          </span>
        </div>
      </div>
      {/* <span className="text-xs">{json}</span> */}
      <RecipeContext.Provider
        value={{
          recipeRecords,
          setRecipeRecords,
          cartRecords: cartRecords,
          setCartRecords: setCartRecords,
        }}
      >
        <div className="space-y-2">
          <RecipeCardTree item={data} recipePath="" depth={0} />
        </div>
      </RecipeContext.Provider>

      <div className="grid space-x-1 bg-neutral-800 py-4 md:grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-row items-baseline space-x-4 px-4">
          <h1 className="text-2xl">{t("pages.item.recipe.cart")}</h1>
        </div>
        <div></div>
        <div className="flex flex-row justify-end space-x-2 p-2">
        <span className="w-28 px-2 text-center">
            {t("pages.item.recipe.customPrice")}
          </span>
          <span className="w-28 px-2 text-center">
            {t("pages.item.recipe.craftCost")}
          </span>
          <span className="w-28 px-2 text-center">
            {t("pages.item.recipe.buyPrice")}
          </span>
          <span className="w-28 px-2 text-center">
            {t("pages.item.recipe.sellPrice")}
          </span>
        </div>
      </div>

      <RecipeContext.Provider
        value={{
          recipeRecords,
          setRecipeRecords,
          cartRecords: cartRecords,
          setCartRecords: setCartRecords,
        }}
      >
        <div className="space-y-2">
          {sortedCartRecords.map((record) => (
            <RecipeCardCartRow
              key={record.condensedItem.id}
              cartRecord={record}
            />
          ))}
        </div>
        <RecipeCardSummary
          item={data}
          recipeQty={recipeRecords[0]?.recipeQty ?? 1}
        />
      </RecipeContext.Provider>
    </div>
  );
};

export default RecipeCard;

function getCartRecords(recipeRecords: RecipeRecord[]) {
  const activeItems = recipeRecords.filter((x) => x.action === "buy");
  const aggregateItems = activeItems.reduce((acc, row) => {
    const existingItem = acc.find(
      (i) => i.condensedItem.id === row.condensedItem.id,
    );
    if (existingItem) {
      existingItem.quantity += row.ingredientQty * row.parentRecipeQty;
    } else {
      const newRow = {
        condensedItem: row.condensedItem,
        craftCost: row.craftCost,
        buyPriceMax: row.buyPriceMax,
        sellPriceMin: row.sellPriceMin,
        price: row.price,
        quantity: row.ingredientQty * row.parentRecipeQty,
        totalCost: 0,
      };
      acc.push(newRow);
    }
    return acc;
  }, [] as CartRecord[]);
  aggregateItems.forEach((x) => {
    x.totalCost = x.quantity * x.price;
  });
  return aggregateItems;
}
