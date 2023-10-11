import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TypeOrderByWithRelationInputObjectSchema } from './TypeOrderByWithRelationInput.schema';
import { CategoryOrderByWithRelationInputObjectSchema } from './CategoryOrderByWithRelationInput.schema';
import { FactionOrderByWithRelationInputObjectSchema } from './FactionOrderByWithRelationInput.schema';
import { RarityOrderByWithRelationInputObjectSchema } from './RarityOrderByWithRelationInput.schema';
import { ItemStatsOrderByRelationAggregateInputObjectSchema } from './ItemStatsOrderByRelationAggregateInput.schema';
import { MarketOrderByRelationAggregateInputObjectSchema } from './MarketOrderByRelationAggregateInput.schema';
import { BadgeExchangeOrderByRelationAggregateInputObjectSchema } from './BadgeExchangeOrderByRelationAggregateInput.schema';
import { RecipeOrderByRelationAggregateInputObjectSchema } from './RecipeOrderByRelationAggregateInput.schema';
import { RecipeItemOrderByRelationAggregateInputObjectSchema } from './RecipeItemOrderByRelationAggregateInput.schema';
import { PackItemOrderByRelationAggregateInputObjectSchema } from './PackItemOrderByRelationAggregateInput.schema';
import { SynergyItemOrderByRelationAggregateInputObjectSchema } from './SynergyItemOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    marketDef: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    typeId: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    factionId: z.lazy(() => SortOrderSchema).optional(),
    rarityId: z.lazy(() => SortOrderSchema).optional(),
    level: z.lazy(() => SortOrderSchema).optional(),
    sellPriceMin: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    sellOrders: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    buyPriceMax: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    buyOrders: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    craftCost: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    timestamp: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    active: z.lazy(() => SortOrderSchema).optional(),
    logId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    type: z.lazy(() => TypeOrderByWithRelationInputObjectSchema).optional(),
    category: z
      .lazy(() => CategoryOrderByWithRelationInputObjectSchema)
      .optional(),
    faction: z
      .lazy(() => FactionOrderByWithRelationInputObjectSchema)
      .optional(),
    rarity: z.lazy(() => RarityOrderByWithRelationInputObjectSchema).optional(),
    itemStats: z
      .lazy(() => ItemStatsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    market: z
      .lazy(() => MarketOrderByRelationAggregateInputObjectSchema)
      .optional(),
    badgeExchange: z
      .lazy(() => BadgeExchangeOrderByRelationAggregateInputObjectSchema)
      .optional(),
    recipes: z
      .lazy(() => RecipeOrderByRelationAggregateInputObjectSchema)
      .optional(),
    recipeItems: z
      .lazy(() => RecipeItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    packItems: z
      .lazy(() => PackItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    itemSynergies: z
      .lazy(() => SynergyItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemOrderByWithRelationInputObjectSchema = Schema;
