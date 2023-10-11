import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PackPriceCountOrderByAggregateInputObjectSchema } from './PackPriceCountOrderByAggregateInput.schema';
import { PackPriceAvgOrderByAggregateInputObjectSchema } from './PackPriceAvgOrderByAggregateInput.schema';
import { PackPriceMaxOrderByAggregateInputObjectSchema } from './PackPriceMaxOrderByAggregateInput.schema';
import { PackPriceMinOrderByAggregateInputObjectSchema } from './PackPriceMinOrderByAggregateInput.schema';
import { PackPriceSumOrderByAggregateInputObjectSchema } from './PackPriceSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    packId: z.lazy(() => SortOrderSchema).optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    priceUSD: z.lazy(() => SortOrderSchema).optional(),
    priceEUR: z.lazy(() => SortOrderSchema).optional(),
    priceGBP: z.lazy(() => SortOrderSchema).optional(),
    priceRUB: z.lazy(() => SortOrderSchema).optional(),
    discount: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PackPriceCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => PackPriceAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PackPriceMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PackPriceMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => PackPriceSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PackPriceOrderByWithAggregationInputObjectSchema = Schema;
