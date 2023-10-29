import { db } from "~/server/db";

export interface ItemCrafting {
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

export interface RecipeCrafting {
  recipeId: number;
  resultItemId: number;
  resultItemName: string;
  craftCost: number;
  items: ItemCrafting[];
}

export async function CalcCraftingCosts() {
  const itemPrices = await db.market.findMany({
    where: {
      timestamp: {
        gt: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    },
    orderBy: {
      timestamp: "desc",
    },
    distinct: ["itemId"],
  });
  
  const recipes = await db.recipe.findMany({
    include: {
      result: true,
      ingredients: {
        include: {
          item: true,
        },
      },
    },
    orderBy: {
      result: {
        rarity: {
          id: "asc",
        },
      },
    },
  });
  
  const itemCraftCosts: ItemCrafting[] = [];
  const recipeCraftCosts: RecipeCrafting[] = [];

  if (recipes) {
    for (const recipe of recipes) {
      const recipeResultItemId = recipe.resultItemId;

      /**************************/
      /**** Calc Recipe Cost ****/
      /**************************/
      let recipeCost = 0;
      const recipeItems: ItemCrafting[] = [];

      //TODO: See if reduce is faster
      //const recipeCost = recipe.ingredients.reduce((totalCost, ingredient) => {
      for (const ingredient of recipe.ingredients) {
        const item = ingredient.item;
        const itemPrice = itemPrices.find(
          (i) => i.itemId === ingredient.itemId,
        );
        const sellPriceMin = itemPrice?.sellPriceMin ?? 0;
        const itemCraftCost =
          itemCraftCosts.find((i) => i.itemId === ingredient.itemId)
            ?.craftCost ?? 0;
        recipeItems.push({
          itemId: item.id,
          itemName: item.name,
          itemQty: item.quantity,
          recipeQty: ingredient.quantity,
          sellPriceMin: sellPriceMin,
          sellOrders: itemPrice?.sellOrders ?? 0,
          buyPriceMax: itemPrice?.buyPriceMax ?? 0,
          buyOrders: itemPrice?.buyOrders ?? 0,
          craftCost: itemCraftCost,
          timestamp: itemPrice?.timestamp,
        });
        if (
          sellPriceMin == 0 ||
          (itemCraftCost > 0 && itemCraftCost < sellPriceMin)
        ) {
          recipeCost += itemCraftCost * ingredient.quantity;
        } else {
          const pricePerItem = Math.round(sellPriceMin / item.quantity);
          recipeCost += pricePerItem * ingredient.quantity;
        }
      }

      const recipeRecord: RecipeCrafting = {
        recipeId: recipe.id,
        resultItemId: recipe.resultItemId,
        resultItemName: recipe.result.name,
        craftCost: recipeCost,
        items: recipeItems,
      };

      /**************************/

      recipeCraftCosts.push(recipeRecord);

      const itemCraftCost = itemCraftCosts.find(
        (i) => i.itemId === recipeResultItemId,
      );
      console.warn(`Item ${recipeResultItemId} not found in itemCraftCosts`);

      const newItemCost = Math.round(recipeRecord.craftCost / recipe.quantity);
      if (itemCraftCost) {
        if (newItemCost > 0 && newItemCost < itemCraftCost.craftCost) {
          itemCraftCost.craftCost = newItemCost;
        }
      } else {
        const itemPrice = itemPrices?.find(
          (i) => i.itemId === recipeResultItemId,
        );
        console.warn(`Item ${recipeResultItemId} not found in itemPrices`);

        itemCraftCosts.push({
          itemId: recipeResultItemId,
          itemName: recipe.result.name,
          itemQty: recipe.result.quantity,
          recipeQty: recipe.quantity,
          sellPriceMin: itemPrice?.sellPriceMin ?? 0,
          sellOrders: itemPrice?.sellOrders ?? 0,
          buyPriceMax: itemPrice?.buyPriceMax ?? 0,
          buyOrders: itemPrice?.buyOrders ?? 0,
          craftCost: newItemCost,
          timestamp: itemPrice?.timestamp,
        });
      }
    }
  }

  await UpdateRecipeCraftingCosts(recipeCraftCosts);
  await UpdateItemCraftingCosts(itemCraftCosts);

  return { recipeCraftCosts, itemCraftCosts, itemPrices };
}

async function UpdateRecipeCraftingCosts(recipeCraftCosts: RecipeCrafting[]) {
  for (const recipeCraftCost of recipeCraftCosts) {
    await db.recipe.update({
      where: {
        id: recipeCraftCost.recipeId,
      },
      data: {
        craftCost: recipeCraftCost.craftCost,
        timestamp: new Date(),
      },
    });
  }
}

async function UpdateItemCraftingCosts(itemCraftCosts: ItemCrafting[]) {
  for (const itemCraftCost of itemCraftCosts) {
    await db.item.update({
      where: {
        id: itemCraftCost.itemId,
      },
      data: {
        sellPriceMin: itemCraftCost.sellPriceMin,
        sellOrders: itemCraftCost.sellOrders,
        buyPriceMax: itemCraftCost.buyPriceMax,
        buyOrders: itemCraftCost.buyOrders,
        craftCost: itemCraftCost.craftCost,
        timestamp: itemCraftCost.timestamp,
      },
    });
  }
}
