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

import RecipeCardBOMRow from "./RecipeCardBOMRow";
import RecipeCardSummary from "./RecipeCardSummary";
import RecipeCardTree from "./RecipeCardTree";

export type RecipeRecord = {
  condensedItem: { name: string; id: number; rarityId: number };
  recipePath: string;
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

export type BOMRecord = {
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
  bomRecords: BOMRecord[];
  setRecipeRecords: Dispatch<SetStateAction<RecipeRecord[]>>;
  setBomRecords: Dispatch<SetStateAction<BOMRecord[]>>;
}

export const RecipeContext = createContext<RecipeContextData | undefined>(
  undefined,
);

interface RecipeCardProps {
  data: ItemFindUniqueOutput;
}

export const resourceIds = [2870, 2871, 2872, 2873, 2874, 2875, 2876, 2877];
const mapRecipesRecursive = (
  item: ItemFindUniqueOutput,
  ingredientQty: number,
  parentActive: boolean,
  recipePath: string,
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
  const craftCost = item.recipes[recipeIdx]?.craftCost ?? 0;
  const buyPriceMax = item.buyPriceMax ?? 0;
  const sellPriceMin = item.sellPriceMin ?? 0;
  const price = minGrZero([buyPriceMax, craftCost]);
  const craftCostSelected =
    price === craftCost && !resourceIds.includes(item.id)
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
        name: item.name,
        rarityId: item.rarityId,
      },
      recipePath: createRecipePath(recipePath, item.id),
      selectedRecipeId: item.recipes[recipeIdx]?.id,
      craftCost: craftCost,
      buyPriceMax: buyPriceMax,
      sellPriceMin: sellPriceMin,
      price: price,
      recipeQty: item.recipes[recipeIdx]?.quantity ?? 0,
      ingredientQty,
      active: craftCostSelected,
      action: action,
    },
    ...item.recipes
      .map((recipe) =>
        recipe.ingredients.map((ingredient) =>
          mapRecipesRecursive(
            // @ts-ignore
            ingredient.item,
            ingredient.quantity,
            craftCostSelected,
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
  const [recipeRecords, setRecipeRecords] = useState(
    mapRecipesRecursive(data, 1, true, ""),
  );
  const [bomRecords, setBomRecords] = useState<BOMRecord[]>([]);

  useEffect(() => {
    setBomRecords(getBOMRecords(recipeRecords));
  }, [recipeRecords]);

  const sortedBomRecords = [...bomRecords].sort(
    (a, b) => a.condensedItem.id - b.condensedItem.id,
  );

  if (!data) return <></>;

  return (
    <div className="space-y-2 text-white">
      <div className="flex flex-row items-baseline space-x-4 bg-neutral-800 p-4">
        <h1 className="text-2xl">{t("fields.recipe")}</h1>
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
          Expand all
        </PrimaryButton>
        <PrimaryButton
          onClick={() =>
            setRecipeRecords(
              recipeRecords.map((x) => ({ ...x, active: false })),
            )
          }
        >
          Collapse all
        </PrimaryButton>
        <span>Craft Cost</span>
        <span>Buy Price Max</span>
        <span>Sell Price Min</span>
      </div>
      <RecipeContext.Provider
        value={{ recipeRecords, setRecipeRecords, bomRecords, setBomRecords }}
      >
        <div className="space-y-2">
          <RecipeCardTree item={data} recipePath="" depth={0} />
        </div>
      </RecipeContext.Provider>

      <div className="flex flex-row items-baseline space-x-4 bg-neutral-800 p-4">
        <h1 className="text-2xl">{t("Recipe.BOM")}</h1>
      </div>

      <RecipeContext.Provider
        value={{ recipeRecords, setRecipeRecords, bomRecords, setBomRecords }}
      >
        <div className="space-y-2">
          {sortedBomRecords.map((bomRecord) => (
            <RecipeCardBOMRow
              key={bomRecord.condensedItem.id}
              bomRecord={bomRecord}
            />
          ))}
        </div>
        <RecipeCardSummary />
      </RecipeContext.Provider>
    </div>
  );
};

export default RecipeCard;

function getBOMRecords(recipeRecords: RecipeRecord[]) {
  const activeItems = recipeRecords.filter((x) => x.action === "buy");
  const aggregateItems = activeItems.reduce((acc, row) => {
    const existingItem = acc.find(
      (i) => i.condensedItem.id === row.condensedItem.id,
    );
    if (existingItem) {
      existingItem.quantity += row.ingredientQty;
    } else {
      const newRow = {
        condensedItem: row.condensedItem,
        craftCost: row.craftCost,
        buyPriceMax: row.buyPriceMax,
        sellPriceMin: row.sellPriceMin,
        price: row.price,
        quantity: row.ingredientQty,
        totalCost: 0,
      };
      acc.push(newRow);
    }
    return acc;
  }, [] as BOMRecord[]);
  aggregateItems.forEach((x) => {
    x.totalCost = x.quantity * x.price;
  });
  return aggregateItems;
}