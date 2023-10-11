import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ItemCountOrderByAggregateInputObjectSchema } from './ItemCountOrderByAggregateInput.schema';
import { ItemAvgOrderByAggregateInputObjectSchema } from './ItemAvgOrderByAggregateInput.schema';
import { ItemMaxOrderByAggregateInputObjectSchema } from './ItemMaxOrderByAggregateInput.schema';
import { ItemMinOrderByAggregateInputObjectSchema } from './ItemMinOrderByAggregateInput.schema';
import { ItemSumOrderByAggregateInputObjectSchema } from './ItemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemOrderByWithAggregationInput> = z
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
    _count: z.lazy(() => ItemCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ItemAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ItemMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ItemMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ItemSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ItemOrderByWithAggregationInputObjectSchema = Schema;
