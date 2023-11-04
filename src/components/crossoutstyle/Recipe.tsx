import Item from "./Item";
import { ChevronDown, ChevronRight } from "react-feather";
import { useContext, useState } from "react";
import { RecipeContext, RecipeContextData } from "./RecipeCard";
import { createRecipePath } from "~/lib/recipePath";
import Select from "./Select";
import PrimaryButton from "./PrimaryButton";
import Price from "./Price";
import { calculateFloatPrice } from "~/lib/priceCalc";
import { useIsMediumDevice } from "~/lib/mediaQueryHooks";
import RecipeAlert from "./RecipeAlert";
import { sortBy } from "lodash";
import { ItemFindUniqueOutput } from "~/pages/item/[id]";
import { useTranslation } from "next-i18next";

const mapRecipes = (
  item: ItemFindUniqueOutput | undefined,
  recipePath: string,
  recipeState: RecipeContextData[number],
  depth: number,
): React.ReactNode => {
  if (!item || !item.recipes) return <></>;

  const recipeIdx = item.recipes.findIndex(
    (recipe) => recipe.id === recipeState.selectedRecipeId,
  );
  return item.recipes[recipeIdx === -1 ? 0 : recipeIdx]?.ingredients.map(
    (ingredient) => (
      <Recipe
        key={ingredient.id}
        // @ts-ignore
        item={ingredient.item}
        recipePath={createRecipePath(recipePath, item.id)}
        depth={depth}
      />
    ),
  );
};

interface RecipeProps {
  item: ItemFindUniqueOutput;
  recipePath: string;
  depth: number;
}

const Recipe: React.FC<RecipeProps> = ({ item, recipePath, depth }) => {
  if (!item) return <></>;
  const { t, i18n } = useTranslation(['common','model']);
  const lang = i18n.language;
  
  const recipeContext = useContext(RecipeContext);
  const recipeState = recipeContext?.value.find(
    (x) => x.recipePath === createRecipePath(recipePath, item?.id),
  );
  const [customPrice, setCustomPrice] = useState(
    calculateFloatPrice(recipeState?.price ?? 0).toFixed(2),
  );
  const isMediumDevice = useIsMediumDevice();


  const expanded = recipeState?.active;
  const setExpanded = (newActive: boolean) => {
    if (recipeState && recipeContext) {
      let childRecipes: RecipeContextData = [];
      if (!newActive) {
        // Find child recipes to set as inactive/collapsed and action to "nothing" if parent collapses
        childRecipes = recipeContext.value
          .filter((x) => x.recipePath.includes(recipeState.recipePath + "_"))
          .map((x) => ({ ...x, active: false, action: "nothing" }));
      }
      if (newActive) {
        // Set first child recipe action to "buy"
        // TODO: doesn't work correctly. a recipe can have more than one direct child
        const buyRecipe = recipeContext.value
          .filter((x) => x.recipePath.includes(recipeState.recipePath + "_"))
          .sort((a, b) => a.recipePath.length - b.recipePath.length)[0];
        if (buyRecipe) childRecipes = [{ ...buyRecipe, action: "buy" }];
      }
      // Build new state
      recipeContext.setValue([
        { ...recipeState, active: newActive, action: "craft" },
        ...childRecipes,
        ...recipeContext.value.filter((x) => {
          if (x.recipePath === recipeState.recipePath) return false;
          if (childRecipes.some((y) => x.recipePath === y.recipePath))
            return false;
          return true;
        }),
      ]);
    }
  };

  const changeRecipe = (newRecipeId: number) => {
    if (recipeState && recipeContext) {
      // Build new state
      recipeContext.setValue([
        { ...recipeState, selectedRecipeId: newRecipeId },
        ...recipeContext.value.filter((x) => {
          if (x.recipePath === recipeState.recipePath) return false;
          return true;
        }),
      ]);
    }
  };

  const changePrice = (newPrice: number) => {
    if (recipeState && recipeContext) {
      // Build new state
      recipeContext.setValue([
        { ...recipeState, price: newPrice },
        ...recipeContext.value.filter((x) => {
          if (x.recipePath === recipeState.recipePath) return false;
          return true;
        }),
      ]);
    }
  };

  const hasRecipes = item.recipes?.length > 0;
  const sellPriceMin = item.sellPriceMin ?? 0;
  const buyPriceMax = item.buyPriceMax ?? 0;
  const price = recipeState?.price ?? 0;
  const sharedStyleClasses = "bg-neutral-800 p-2";
  const indentMultiplier = 20;

  console.log(item);

  return (
    <>
      <div className={`grid space-x-1 md:grid-cols-1 lg:grid-cols-3`}>
        <div
          className={`flex flex-row items-center space-x-2 ${sharedStyleClasses} ${
            !hasRecipes && "pl-10"
          }`}
          style={{ marginLeft: depth * indentMultiplier }}
        >
          {hasRecipes ? (
            expanded ? (
              <ChevronDown onClick={() => setExpanded(!expanded)} />
            ) : (
              <ChevronRight onClick={() => setExpanded(!expanded)} />
            )
          ) : (
            <></>
          )}
          <Item
            name={item.translations?.find((tf) => tf.languageCode === lang)?.value ?? item.name}
            id={item.id}
            rarityId={item.rarityId}
            size="small"
          />
        </div>
        <div
          className={`flex flex-row items-center justify-start space-x-2 ${sharedStyleClasses}`}
          style={isMediumDevice ? { marginLeft: depth * indentMultiplier } : {}}
        >
          {hasRecipes && expanded ? (
            <span>Craft</span>
          ) : (
            <div className="flex flex-row items-center space-x-1">
              <span>Buy for</span>
              <Price value={recipeState?.price ?? 0} />
              <span>each</span>
            </div>
          )}
        </div>
        <div
          style={isMediumDevice ? { marginLeft: depth * indentMultiplier } : {}}
        >
          {hasRecipes && expanded ? (
            <div
              className={`flex flex-row space-x-2 md:justify-start lg:justify-end ${sharedStyleClasses}`}
            >
              <Select
                entries={item.recipes.map((recipe) => ({
                  key: recipe.id.toString(),
                  label: "Recipe " + recipe.id,
                  value: recipe.id,
                }))}
                onChange={(selectedEntry) => changeRecipe(selectedEntry.value as number)}
                defaultEntryKey={recipeState?.selectedRecipeId?.toString()}
              />
            </div>
          ) : (
            <div
              className={`flex flex-row space-x-2 md:justify-start lg:justify-end ${sharedStyleClasses}`}
            >
              {price === 0 && (
                <RecipeAlert
                  message={"Item is not available\n on the market"}
                />
              )}
              <input
                type="text"
                size={8}
                className="border-xoPrimary focus:border-xoQuaternary border bg-black px-2 text-right text-white hover:border-white focus:shadow focus:shadow-orange-500 focus:outline-none"
                value={customPrice}
                onChange={(e) => {
                  setCustomPrice(e.target.value);
                }}
                onBlur={(e) => {
                  changePrice(parseFloat(e.target.value) * 100);
                }}
              />
              <PrimaryButton
                onClick={() => {
                  changePrice(buyPriceMax);
                  setCustomPrice(calculateFloatPrice(buyPriceMax).toFixed(2));
                }}
                active={price === buyPriceMax}
              >
                <Price value={buyPriceMax} />
              </PrimaryButton>
              <PrimaryButton
                onClick={() => {
                  changePrice(sellPriceMin);
                  setCustomPrice(calculateFloatPrice(sellPriceMin).toFixed(2));
                }}
                active={price === sellPriceMin}
              >
                <Price value={sellPriceMin} />
              </PrimaryButton>
            </div>
          )}
        </div>
      </div>
      {expanded && mapRecipes(item, recipePath, recipeState, depth + 1)}
    </>
  );
};

export default Recipe;
