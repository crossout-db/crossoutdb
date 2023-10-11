import { z } from 'zod';
import { ItemStatsUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './ItemStatsUncheckedCreateNestedManyWithoutItemInput.schema';
import { MarketUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './MarketUncheckedCreateNestedManyWithoutItemInput.schema';
import { BadgeExchangeUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './BadgeExchangeUncheckedCreateNestedManyWithoutItemInput.schema';
import { RecipeUncheckedCreateNestedManyWithoutResultInputObjectSchema } from './RecipeUncheckedCreateNestedManyWithoutResultInput.schema';
import { RecipeItemUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './RecipeItemUncheckedCreateNestedManyWithoutItemInput.schema';
import { PackItemUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './PackItemUncheckedCreateNestedManyWithoutItemInput.schema';
import { SynergyItemUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './SynergyItemUncheckedCreateNestedManyWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUncheckedCreateWithoutRarityInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    marketDef: z.string().optional().nullable(),
    quantity: z.number(),
    typeId: z.number(),
    categoryId: z.number(),
    factionId: z.number(),
    level: z.number(),
    sellPriceMin: z.number().optional().nullable(),
    sellOrders: z.number().optional().nullable(),
    buyPriceMax: z.number().optional().nullable(),
    buyOrders: z.number().optional().nullable(),
    craftCost: z.number().optional().nullable(),
    timestamp: z.coerce.date().optional().nullable(),
    active: z.boolean(),
    logId: z.number().optional().nullable(),
    itemStats: z
      .lazy(
        () => ItemStatsUncheckedCreateNestedManyWithoutItemInputObjectSchema,
      )
      .optional(),
    market: z
      .lazy(() => MarketUncheckedCreateNestedManyWithoutItemInputObjectSchema)
      .optional(),
    badgeExchange: z
      .lazy(
        () =>
          BadgeExchangeUncheckedCreateNestedManyWithoutItemInputObjectSchema,
      )
      .optional(),
    recipes: z
      .lazy(() => RecipeUncheckedCreateNestedManyWithoutResultInputObjectSchema)
      .optional(),
    recipeItems: z
      .lazy(
        () => RecipeItemUncheckedCreateNestedManyWithoutItemInputObjectSchema,
      )
      .optional(),
    packItems: z
      .lazy(() => PackItemUncheckedCreateNestedManyWithoutItemInputObjectSchema)
      .optional(),
    itemSynergies: z
      .lazy(
        () => SynergyItemUncheckedCreateNestedManyWithoutItemInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ItemUncheckedCreateWithoutRarityInputObjectSchema = Schema;
