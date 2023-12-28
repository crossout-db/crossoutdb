import { useTranslation } from "next-i18next";
import { useContext, useState } from "react";
import { ChevronDown, ChevronRight } from "react-feather";

import Alert from "@components/Alert";
import Item from "@components/Item";
import Price from "@components/Price";
import PrimaryButton from "@components/PrimaryButton";
import Select from "@components/Select";
import { useIsMediumDevice } from "~/lib/mediaQueryHooks";
import { minGrZero } from "~/lib/minGrZero";
import { calculateFloatPrice } from "~/lib/priceCalc";
import { createRecipePath } from "~/lib/recipePath";
import { type ItemFindUniqueOutput } from "~/pages/item/[id]";

import { RecipeContext, type RecipeRecord } from "./RecipeCard";


const mapRecipes = (
  item: ItemFindUniqueOutput | undefined,
  recipePath: string,
  recipeState: RecipeRecord,
  depth: number,
): React.ReactNode => {
  if (!item || !item.recipes) return <></>;

  const recipeIdx = item.recipes.findIndex(
    (recipe) => recipe.id === recipeState.selectedRecipeId,
  );
  const selectedRecipe = item.recipes[recipeIdx === -1 ? 0 : recipeIdx];
  return selectedRecipe?.ingredients.map(
    (ingredient) => (
      <RecipeCardTree
        key={ingredient.id}
        // @ts-ignore
        item={ingredient.item}
        recipePath={createRecipePath(recipePath, item.id)}
        depth={depth}
      />
    ),
  );
};

interface RecipeCardTreeProps {
  item: ItemFindUniqueOutput;
  recipePath: string;
  depth: number;
}

const RecipeCardTree: React.FC<RecipeCardTreeProps> = ({
  item,
  recipePath,
  depth,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const recipeContext = useContext(RecipeContext);
  const recipeState = recipeContext?.recipeRecords.find(
    (x) => x.recipePath === createRecipePath(recipePath, item?.id),
  );
  const [customPrice, setCustomPrice] = useState(
    calculateFloatPrice(recipeState?.price ?? 0).toFixed(2),
  );
  const isMediumDevice = useIsMediumDevice();

  const recipeIdx = item.recipes.findIndex(
    (recipe) => recipe.id === recipeState?.selectedRecipeId,
  );
  const selectedRecipe = item.recipes[recipeIdx === -1 ? 0 : recipeIdx];

  if (!item) return <></>;

  const expanded = recipeState?.active;
  const setExpanded = (newActive: boolean) => {
    if (recipeState && recipeContext) {
      let childRecipes: RecipeRecord[] = [];
      if (!newActive) {
        // Find child recipes to set as inactive/collapsed and action to "nothing" if parent collapses
        childRecipes = recipeContext?.recipeRecords
          .filter((x) => x.recipePath.startsWith(recipeState.recipePath))
          .map((x) => {
            if (x.recipePath === recipeState.recipePath)
              return { ...x, active: false, action: "buy" };
            return { ...x, active: false, action: "nothing" };
          });
      }
      if (newActive) {
        childRecipes = recipeContext?.recipeRecords
          .filter(
            (x) =>
              x.parentPath === recipeState.recipePath &&
              x.parentRecipeId === recipeState.selectedRecipeId,
          )
          .map((x) => ({ ...x, active: false, action: "buy" }));
      }
      // Build new state
      recipeContext.setRecipeRecords([
        { ...recipeState, active: newActive, action: "craft" },
        ...childRecipes,
        ...recipeContext?.recipeRecords.filter((x) => {
          if (x.recipePath === recipeState.recipePath) return false;
          if (childRecipes.some((y) => x.recipePath === y.recipePath))
            return false;
          return true;
        }),
      ]);
    }
  };

  const changeRecipe = (newRecipeId: number, craftCost: number) => {
    if (recipeState && recipeContext) {
      const childRecipes: RecipeRecord[] = recipeContext?.recipeRecords
        .filter((x) => x.recipePath.startsWith(recipeState.recipePath + "_"))
        .map((x) => {
          if (
            x.parentPath === recipeState.recipePath &&
            x.parentRecipeId === recipeState.selectedRecipeId
          )
            return { ...x, active: false, action: "nothing" };
          if (
            x.parentPath === recipeState.recipePath &&
            x.parentRecipeId === newRecipeId
          )
            return { ...x, active: false, action: "buy" };
          return { ...x, active: false, action: "nothing" };
        });
      // Build new state
      recipeContext.setRecipeRecords([
        {
          ...recipeState,
          selectedRecipeId: newRecipeId,
          craftCost,
          price: minGrZero([buyPriceMax, craftCost]),
        },
        ...childRecipes,
        ...recipeContext?.recipeRecords.filter((x) => {
          if (!x.recipePath.startsWith(recipeState.recipePath + "_"))
            return true;
        }),
      ]);
    }
  };

  const changePrice = (newPrice: number) => {
    if (recipeState && recipeContext) {
      // Build new state
      recipeContext.setRecipeRecords([
        { ...recipeState, price: newPrice },
        ...recipeContext?.recipeRecords.filter((x) => {
          if (x.recipePath === recipeState.recipePath) return false;
          return true;
        }),
      ]);
    }
  };

  const hasMultipleRecipes = item.recipes?.length > 1;
  const hasRecipe = item.recipes?.length > 0;
  const craftCost = recipeState?.craftCost ?? 0;
  const sellPriceMin = item.sellPriceMin ?? 0;
  const buyPriceMax = item.buyPriceMax ?? 0;
  const price = recipeState?.price ?? 0;
  const sharedStyleClasses = "bg-neutral-800 p-2";
  const indentMultiplier = 20;

  return (
    <>
      <div className={`grid space-x-1 md:grid-cols-1 lg:grid-cols-3`}>
        <div
          className={`flex flex-row items-center space-x-2 ${sharedStyleClasses} ${
            !hasRecipe && "pl-10"
          }`}
          style={{ marginLeft: depth * indentMultiplier }}
        >
          {hasRecipe ? (
            expanded ? (
              <ChevronDown onClick={() => setExpanded(!expanded)} />
            ) : (
              <ChevronRight onClick={() => setExpanded(!expanded)} />
            )
          ) : (
            <></>
          )}
          <Item
            name={recipeState?.condensedItem.name ?? item.name}
            id={item.id}
            rarityId={item.rarityId}
            size="small"
          />
          <div className="flex w-full flex-row justify-end">
            <span className="text-lg text-red-600">{(!hasMultipleRecipes && selectedRecipe?.name === "Recipe_Workpiece") &&
              `[ ${t("db.recipe.Recipe_Workpiece")} ]`}</span>
            {hasMultipleRecipes && (
              <Select
                textColor={selectedRecipe?.name === "Recipe_Workpiece" ? "red-600" : "xoPrimary"}
                entries={item.recipes.map((recipe) => ({
                  key: recipe.id.toString(),
                  label: t("db.recipe." + recipe.name),
                  value: recipe.id,
                }))}
                onChange={(selectedEntry) =>
                  changeRecipe(
                    selectedEntry.value as number,
                    item.recipes.find((x) => x.id === selectedEntry.value)
                      ?.craftCost ?? 0,
                  )
                }
                defaultEntryKey={recipeState?.selectedRecipeId?.toString()}
              />
            )}
          </div>
        </div>
        <div
          className={`flex flex-row items-center justify-start space-x-2 ${sharedStyleClasses}`}
          style={isMediumDevice ? { marginLeft: depth * indentMultiplier } : {}}
        >
          {price === 0 && (
            <Alert message={"Item is not available\n on the market"} />
          )}
          {hasRecipe && expanded ? (
            <span>{`${t(
              "pages.item.recipe.recipeRequires",
            )} [ ${recipeState?.ingredientQty} ], ${t(
              "pages.item.recipe.recipeMakes",
            )} [ ${recipeState?.recipeQty} ], ${t(
              "pages.item.recipe.craft",
            )} [ ${
              recipeState?.ingredientQty / recipeState?.recipeQty
            } ] `}</span>
          ) : (
            <div className="flex flex-row items-center space-x-1">
              <span>{`${t(
                "pages.item.recipe.purchase",
              )} [ ${recipeState?.ingredientQty} ] ${t(
                "pages.item.recipe.for",
              )}`}</span>
              <Price value={recipeState?.price ?? 0} />
              <span>{t("pages.item.recipe.each")}</span>
            </div>
          )}
        </div>
        <div
          style={isMediumDevice ? { marginLeft: depth * indentMultiplier } : {}}
        >
          <div
            className={`flex flex-row space-x-2 md:justify-start lg:justify-end ${sharedStyleClasses}`}
          >
            <PrimaryButton
              disabled={craftCost === 0}
              onClick={() => {
                changePrice(craftCost);
                setCustomPrice(calculateFloatPrice(craftCost).toFixed(2));
              }}
              active={price !== 0 && price === craftCost}
              justify="end"
            >
              <Price value={craftCost} />
            </PrimaryButton>
            <PrimaryButton
              disabled={buyPriceMax === 0}
              onClick={() => {
                changePrice(buyPriceMax);
                setCustomPrice(calculateFloatPrice(buyPriceMax).toFixed(2));
              }}
              active={price !== 0 && price === buyPriceMax}
              justify="end"
            >
              <Price value={buyPriceMax} />
            </PrimaryButton>
            <PrimaryButton
              disabled={sellPriceMin === 0}
              onClick={() => {
                changePrice(sellPriceMin);
                setCustomPrice(calculateFloatPrice(sellPriceMin).toFixed(2));
              }}
              active={price !== 0 && price === sellPriceMin}
              justify="end"
            >
              <Price value={sellPriceMin} />
            </PrimaryButton>
          </div>
        </div>
      </div>
      {expanded && mapRecipes(item, recipePath, recipeState, depth + 1)}
    </>
  );
};

export default RecipeCardTree;
