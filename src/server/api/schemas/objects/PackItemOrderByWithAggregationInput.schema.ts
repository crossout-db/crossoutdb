import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PackItemCountOrderByAggregateInputObjectSchema } from './PackItemCountOrderByAggregateInput.schema';
import { PackItemAvgOrderByAggregateInputObjectSchema } from './PackItemAvgOrderByAggregateInput.schema';
import { PackItemMaxOrderByAggregateInputObjectSchema } from './PackItemMaxOrderByAggregateInput.schema';
import { PackItemMinOrderByAggregateInputObjectSchema } from './PackItemMinOrderByAggregateInput.schema';
import { PackItemSumOrderByAggregateInputObjectSchema } from './PackItemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    packId: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PackItemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => PackItemAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PackItemMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PackItemMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PackItemSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PackItemOrderByWithAggregationInputObjectSchema = Schema;
