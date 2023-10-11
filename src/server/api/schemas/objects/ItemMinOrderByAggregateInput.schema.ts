import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    marketDef: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    typeId: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    factionId: z.lazy(() => SortOrderSchema).optional(),
    rarityId: z.lazy(() => SortOrderSchema).optional(),
    level: z.lazy(() => SortOrderSchema).optional(),
    sellPriceMin: z.lazy(() => SortOrderSchema).optional(),
    sellOrders: z.lazy(() => SortOrderSchema).optional(),
    buyPriceMax: z.lazy(() => SortOrderSchema).optional(),
    buyOrders: z.lazy(() => SortOrderSchema).optional(),
    craftCost: z.lazy(() => SortOrderSchema).optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    active: z.lazy(() => SortOrderSchema).optional(),
    logId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ItemMinOrderByAggregateInputObjectSchema = Schema;
