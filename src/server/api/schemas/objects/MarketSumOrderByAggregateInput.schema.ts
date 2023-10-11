import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    sellPriceMin: z.lazy(() => SortOrderSchema).optional(),
    sellOrders: z.lazy(() => SortOrderSchema).optional(),
    buyPriceMax: z.lazy(() => SortOrderSchema).optional(),
    buyOrders: z.lazy(() => SortOrderSchema).optional(),
    craftCost: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MarketSumOrderByAggregateInputObjectSchema = Schema;
