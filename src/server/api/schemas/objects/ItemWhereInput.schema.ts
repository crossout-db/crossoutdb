import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { TypeRelationFilterObjectSchema } from './TypeRelationFilter.schema';
import { TypeWhereInputObjectSchema } from './TypeWhereInput.schema';
import { CategoryRelationFilterObjectSchema } from './CategoryRelationFilter.schema';
import { CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { FactionRelationFilterObjectSchema } from './FactionRelationFilter.schema';
import { FactionWhereInputObjectSchema } from './FactionWhereInput.schema';
import { RarityRelationFilterObjectSchema } from './RarityRelationFilter.schema';
import { RarityWhereInputObjectSchema } from './RarityWhereInput.schema';
import { ItemStatsListRelationFilterObjectSchema } from './ItemStatsListRelationFilter.schema';
import { MarketListRelationFilterObjectSchema } from './MarketListRelationFilter.schema';
import { BadgeExchangeListRelationFilterObjectSchema } from './BadgeExchangeListRelationFilter.schema';
import { RecipeListRelationFilterObjectSchema } from './RecipeListRelationFilter.schema';
import { RecipeItemListRelationFilterObjectSchema } from './RecipeItemListRelationFilter.schema';
import { PackItemListRelationFilterObjectSchema } from './PackItemListRelationFilter.schema';
import { SynergyItemListRelationFilterObjectSchema } from './SynergyItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ItemWhereInputObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ItemWhereInputObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    marketDef: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    quantity: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    typeId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    factionId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    rarityId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    level: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    sellPriceMin: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    sellOrders: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    buyPriceMax: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    buyOrders: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    craftCost: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    timestamp: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    active: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    logId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    type: z
      .union([
        z.lazy(() => TypeRelationFilterObjectSchema),
        z.lazy(() => TypeWhereInputObjectSchema),
      ])
      .optional(),
    category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema),
      ])
      .optional(),
    faction: z
      .union([
        z.lazy(() => FactionRelationFilterObjectSchema),
        z.lazy(() => FactionWhereInputObjectSchema),
      ])
      .optional(),
    rarity: z
      .union([
        z.lazy(() => RarityRelationFilterObjectSchema),
        z.lazy(() => RarityWhereInputObjectSchema),
      ])
      .optional(),
    itemStats: z.lazy(() => ItemStatsListRelationFilterObjectSchema).optional(),
    market: z.lazy(() => MarketListRelationFilterObjectSchema).optional(),
    badgeExchange: z
      .lazy(() => BadgeExchangeListRelationFilterObjectSchema)
      .optional(),
    recipes: z.lazy(() => RecipeListRelationFilterObjectSchema).optional(),
    recipeItems: z
      .lazy(() => RecipeItemListRelationFilterObjectSchema)
      .optional(),
    packItems: z.lazy(() => PackItemListRelationFilterObjectSchema).optional(),
    itemSynergies: z
      .lazy(() => SynergyItemListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ItemWhereInputObjectSchema = Schema;
