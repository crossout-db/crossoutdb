import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { logCountOrderByAggregateInputObjectSchema } from './logCountOrderByAggregateInput.schema';
import { logAvgOrderByAggregateInputObjectSchema } from './logAvgOrderByAggregateInput.schema';
import { logMaxOrderByAggregateInputObjectSchema } from './logMaxOrderByAggregateInput.schema';
import { logMinOrderByAggregateInputObjectSchema } from './logMinOrderByAggregateInput.schema';
import { logSumOrderByAggregateInputObjectSchema } from './logSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.logOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    tableChanged: z.lazy(() => SortOrderSchema).optional(),
    recordId: z.lazy(() => SortOrderSchema).optional(),
    record: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => logCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => logAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => logMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => logMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => logSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const logOrderByWithAggregationInputObjectSchema = Schema;
