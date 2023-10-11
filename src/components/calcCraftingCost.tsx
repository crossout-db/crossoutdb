import { api, type RouterOutputs } from "~/utils/api";

type RecipeFindManyWithResultOutput =
  RouterOutputs["recipe"]["findManyWithResult"][number];

interface ItemCrafting {
  itemId: number;
  itemName: string;
  itemQty: number;
  recipeQty: number;
  sellPriceMin: number;
  sellOrders: number;
  buyPriceMax: number;
  buyOrders: number;
  craftCost: number;
  timestamp: Date | undefined;
}

interface RecipeCrafting {
  recipeId: number;
  resultItemId: number;
  resultItemName: string;
  resultItemRarityId: number;
  craftCost: number;
  items: ItemCrafting[];
}

export const CalcCraftingCosts = () => {
  const itemCraftCosts: ItemCrafting[] = [];
  const recipeCraftCosts: RecipeCrafting[] = [];
  const { data: items } = api.item.findManyWithMarket.useQuery({});
  const { data: recipes } = api.recipe.findManyWithResult.useQuery({});

  if (recipes) {
    for (const recipe of recipes) {

      const recipeRecord = calcRecipeCraftingCost(recipe, itemCraftCosts);

      recipeCraftCosts.push(recipeRecord);

      const itemCost = itemCraftCosts.find(
        (item) => item.itemId === recipe.resultItemId,
      );
      const newItemCost = recipeRecord.craftCost / recipe.quantity;
      if (itemCost) {
        if (newItemCost > 0 && newItemCost < itemCost.craftCost) {
          itemCost.craftCost = newItemCost;
        }
        //console.warn(`Item ${recipe.resultItemId} found`);
      } else {
        const item = items?.find((item) => item.id === recipe.resultItemId);
        itemCraftCosts.push({
          itemId: recipe.resultItemId,
          itemName: recipe.result.name,
          itemQty: recipe.result.quantity,
          recipeQty: recipe.quantity,
          sellPriceMin: item?.market[0]?.sellPriceMin ?? 0,
          sellOrders: item?.market[0]?.sellOrders ?? 0,
          buyPriceMax: item?.market[0]?.buyPriceMax ?? 0,
          buyOrders: item?.market[0]?.buyOrders ?? 0,
          craftCost: newItemCost,
          timestamp: item?.market[0]?.timestamp,
        });
      }
    }
  }
  return (
    <div>
      <p>{JSON.stringify(recipeCraftCosts)}</p>
      <p>{JSON.stringify(itemCraftCosts)}</p>
    </div>
  );
};

function calcRecipeCraftingCost( recipe: RecipeFindManyWithResultOutput, itemCraftCosts: ItemCrafting[]) {
  let recipeCost = 0;
  const recipeItems: ItemCrafting[] = [];

  //TODO: See if reduce is faster
  //const recipeCost = recipe.ingredients.reduce((totalCost, ingredient) => {
  for (const ingredient of recipe.ingredients) {
    const item = ingredient.item;
    const sellPriceMin = item.market[0]?.sellPriceMin ?? 0;
    const craftCost =
      itemCraftCosts.find((item) => item.itemId === ingredient.itemId)
        ?.craftCost ?? 0;
    recipeItems.push({
      itemId: item.id,
      itemName: item.name,
      itemQty: item.quantity,
      recipeQty: ingredient.quantity,
      sellPriceMin: sellPriceMin,
      sellOrders: item.market[0]?.sellOrders ?? 0,
      buyPriceMax: item.market[0]?.buyPriceMax ?? 0,
      buyOrders: item.market[0]?.buyOrders ?? 0,
      craftCost: craftCost,
      timestamp: item.market[0]?.timestamp,
    });
    if (sellPriceMin == 0 || (craftCost > 0 && craftCost < sellPriceMin)) {
      recipeCost += craftCost * ingredient.quantity;
    } else {
      const pricePerItem = sellPriceMin / item.quantity;
      recipeCost += pricePerItem * ingredient.quantity;
    }
  }

  const recipeRecord: RecipeCrafting = {
    recipeId: recipe.id,
    resultItemId: recipe.resultItemId,
    resultItemName: recipe.result.name,
    resultItemRarityId: recipe.result.rarity.order,
    craftCost: recipeCost,
    items: recipeItems,
  };

  return recipeRecord;
}
