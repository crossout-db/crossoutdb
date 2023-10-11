import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MarketCountOrderByAggregateInputObjectSchema } from './MarketCountOrderByAggregateInput.schema';
import { MarketAvgOrderByAggregateInputObjectSchema } from './MarketAvgOrderByAggregateInput.schema';
import { MarketMaxOrderByAggregateInputObjectSchema } from './MarketMaxOrderByAggregateInput.schema';
import { MarketMinOrderByAggregateInputObjectSchema } from './MarketMinOrderByAggregateInput.schema';
import { MarketSumOrderByAggregateInputObjectSchema } from './MarketSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    marketDef: z.lazy(() => SortOrderSchema).optional(),
    sellPriceMin: z.lazy(() => SortOrderSchema).optional(),
    sellOrders: z.lazy(() => SortOrderSchema).optional(),
    buyPriceMax: z.lazy(() => SortOrderSchema).optional(),
    buyOrders: z.lazy(() => SortOrderSchema).optional(),
    craftCost: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MarketCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => MarketAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => MarketMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MarketMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => MarketSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const MarketOrderByWithAggregationInputObjectSchema = Schema;
