import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PackCountOrderByAggregateInputObjectSchema } from './PackCountOrderByAggregateInput.schema';
import { PackAvgOrderByAggregateInputObjectSchema } from './PackAvgOrderByAggregateInput.schema';
import { PackMaxOrderByAggregateInputObjectSchema } from './PackMaxOrderByAggregateInput.schema';
import { PackMinOrderByAggregateInputObjectSchema } from './PackMinOrderByAggregateInput.schema';
import { PackSumOrderByAggregateInputObjectSchema } from './PackSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    steamAppID: z.lazy(() => SortOrderSchema).optional(),
    key: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    coins: z.lazy(() => SortOrderSchema).optional(),
    releaseId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    active: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => PackCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => PackAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PackMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PackMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PackSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PackOrderByWithAggregationInputObjectSchema = Schema;
