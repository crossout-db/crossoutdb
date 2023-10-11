import { z } from 'zod';
import { TypeCreateNestedOneWithoutItemsInputObjectSchema } from './TypeCreateNestedOneWithoutItemsInput.schema';
import { CategoryCreateNestedOneWithoutItemsInputObjectSchema } from './CategoryCreateNestedOneWithoutItemsInput.schema';
import { FactionCreateNestedOneWithoutItemsInputObjectSchema } from './FactionCreateNestedOneWithoutItemsInput.schema';
import { RarityCreateNestedOneWithoutItemsInputObjectSchema } from './RarityCreateNestedOneWithoutItemsInput.schema';
import { ItemStatsCreateNestedManyWithoutItemInputObjectSchema } from './ItemStatsCreateNestedManyWithoutItemInput.schema';
import { MarketCreateNestedManyWithoutItemInputObjectSchema } from './MarketCreateNestedManyWithoutItemInput.schema';
import { BadgeExchangeCreateNestedManyWithoutItemInputObjectSchema } from './BadgeExchangeCreateNestedManyWithoutItemInput.schema';
import { RecipeCreateNestedManyWithoutResultInputObjectSchema } from './RecipeCreateNestedManyWithoutResultInput.schema';
import { PackItemCreateNestedManyWithoutItemInputObjectSchema } from './PackItemCreateNestedManyWithoutItemInput.schema';
import { SynergyItemCreateNestedManyWithoutItemInputObjectSchema } from './SynergyItemCreateNestedManyWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateWithoutRecipeItemsInput> = z
  .object({
    name: z.string(),
    marketDef: z.string().optional().nullable(),
    quantity: z.number(),
    level: z.number(),
    sellPriceMin: z.number().optional().nullable(),
    sellOrders: z.number().optional().nullable(),
    buyPriceMax: z.number().optional().nullable(),
    buyOrders: z.number().optional().nullable(),
    craftCost: z.number().optional().nullable(),
    timestamp: z.coerce.date().optional().nullable(),
    active: z.boolean(),
    logId: z.number().optional().nullable(),
    type: z.lazy(() => TypeCreateNestedOneWithoutItemsInputObjectSchema),
    category: z.lazy(
      () => CategoryCreateNestedOneWithoutItemsInputObjectSchema,
    ),
    faction: z.lazy(() => FactionCreateNestedOneWithoutItemsInputObjectSchema),
    rarity: z.lazy(() => RarityCreateNestedOneWithoutItemsInputObjectSchema),
    itemStats: z
      .lazy(() => ItemStatsCreateNestedManyWithoutItemInputObjectSchema)
      .optional(),
    market: z
      .lazy(() => MarketCreateNestedManyWithoutItemInputObjectSchema)
      .optional(),
    badgeExchange: z
      .lazy(() => BadgeExchangeCreateNestedManyWithoutItemInputObjectSchema)
      .optional(),
    recipes: z
      .lazy(() => RecipeCreateNestedManyWithoutResultInputObjectSchema)
      .optional(),
    packItems: z
      .lazy(() => PackItemCreateNestedManyWithoutItemInputObjectSchema)
      .optional(),
    itemSynergies: z
      .lazy(() => SynergyItemCreateNestedManyWithoutItemInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemCreateWithoutRecipeItemsInputObjectSchema = Schema;
