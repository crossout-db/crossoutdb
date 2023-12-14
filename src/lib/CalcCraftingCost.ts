import { db } from "~/server/db";

export interface IItemCrafting {
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

export interface IRecipeCrafting {
  recipeId: number;
  resultItemId: number;
  resultItemName: string;
  recipeQty: number;
  craftCost: number;
  items: IItemCrafting[];
}

export interface ICalcCraftingCostsError {
  recipeId: number;
  message: string;
}

export async function CalcCraftingCosts() {
  const currentMarket = await db.market.findMany({
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
      item: true,
      ingredients: {
        include: {
          item: true,
        },
      },
    },
    orderBy: {
      item: {
        rarity: {
          id: "asc",
        },
      },
    },
  });

  const itemCraftCosts: IItemCrafting[] = [];
  const recipeCraftCosts: IRecipeCrafting[] = [];
  const errors: ICalcCraftingCostsError[] = [];

  for (const recipe of recipes) {
    const recipeResultItemId = recipe.itemId;
    const recipeMessage = `Recipe ${recipe.id}|${recipe.item.name}`;

    /**************************/
    /**** Calc Recipe Cost ****/
    /**************************/
    let recipeCost = 0;
    const recipeItems: IItemCrafting[] = [];

    //TODO: See if reduce is faster
    //const recipeCost = recipe.ingredients.reduce((totalCost, ingredient) => {
    for (const ingredient of recipe.ingredients) {
      const item = ingredient.item;
      const ingredientMessage = `Ingredient ${ingredient.itemId}|${item.name}`;

      const itemPrice = currentMarket.find(
        (i) => i.itemId === ingredient.itemId,
      );
      const sellPriceMin = itemPrice?.sellPriceMin ?? 0;
      if (item.saleable) {
        if (!itemPrice) {
          console.warn(
            `${recipeMessage} - ${ingredientMessage}: could not find an itemPrice`,
          );
          errors.push({
            recipeId: recipe.id,
            message: `${ingredientMessage}: could not find an itemPrice`,
          });
        }
        if (sellPriceMin == 0 && item.saleable) {
          console.warn(
            `${recipeMessage} - ${ingredientMessage}: sellPriceMin = 0`,
          );
          errors.push({
            recipeId: recipe.id,
            message: `${ingredientMessage}: sellPriceMin = 0`,
          });
        }
      }
      const itemCraftCost =
        itemCraftCosts.find((i) => i.itemId === ingredient.itemId)?.craftCost ??
        0;
      if (!itemCraftCost && item.categoryId !== 8) {
        console.warn(
          `${recipeMessage} - ${ingredientMessage}: could not find an itemCraftCost`,
        );
        errors.push({
          recipeId: recipe.id,
          message: `${ingredientMessage}: could not find an itemCraftCost`,
        });
      }

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

      let pricePerItem = Math.round(sellPriceMin / item.quantity);
      if (
        itemCraftCost > 0 &&
        (itemCraftCost < sellPriceMin || sellPriceMin == 0)
      ) {
        pricePerItem = itemCraftCost;
      }

      recipeCost += pricePerItem * ingredient.quantity;
    }

    const recipeRecord: IRecipeCrafting = {
      recipeId: recipe.id,
      resultItemId: recipe.itemId,
      resultItemName: recipe.item.name,
      recipeQty: recipe.quantity,
      craftCost: recipeCost,
      items: recipeItems,
    };

    /**************************/

    recipeCraftCosts.push(recipeRecord);

    const recipeCostPerItem = Math.round(
      recipeRecord.craftCost / recipe.quantity,
    );
    if (recipeCostPerItem == 0) {
      console.warn(`${recipeMessage}: recipeCostPerItem == 0`);
      errors.push({ recipeId: recipe.id, message: `recipeCostPerItem == 0` });
    }

    const itemCraftCost = itemCraftCosts.find(
      (i) => i.itemId === recipeResultItemId,
    );
    if (itemCraftCost) {
      if (
        recipeCostPerItem > 0 &&
        recipeCostPerItem < itemCraftCost.craftCost
      ) {
        itemCraftCost.craftCost = recipeCostPerItem;
      }
    } else {
      const itemPrice = currentMarket?.find(
        (i) => i.itemId === recipeResultItemId,
      );
      if (!itemPrice && recipe.item.saleable) {
        console.warn(`${recipeMessage}: could not find result itemPrice`);
        errors.push({
          recipeId: recipe.id,
          message: `could not find result itemPrice`,
        });
      }

      itemCraftCosts.push({
        itemId: recipeResultItemId,
        itemName: recipe.item.name,
        itemQty: recipe.item.quantity,
        recipeQty: recipe.quantity,
        sellPriceMin: itemPrice?.sellPriceMin ?? 0,
        sellOrders: itemPrice?.sellOrders ?? 0,
        buyPriceMax: itemPrice?.buyPriceMax ?? 0,
        buyOrders: itemPrice?.buyOrders ?? 0,
        craftCost: recipeCostPerItem,
        timestamp: itemPrice?.timestamp,
      });
    }
  }

  return { recipeCraftCosts, itemCraftCosts, errors };
}

