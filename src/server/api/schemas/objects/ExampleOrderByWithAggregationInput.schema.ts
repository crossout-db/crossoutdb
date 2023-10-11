import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExampleCountOrderByAggregateInputObjectSchema } from './ExampleCountOrderByAggregateInput.schema';
import { ExampleAvgOrderByAggregateInputObjectSchema } from './ExampleAvgOrderByAggregateInput.schema';
import { ExampleMaxOrderByAggregateInputObjectSchema } from './ExampleMaxOrderByAggregateInput.schema';
import { ExampleMinOrderByAggregateInputObjectSchema } from './ExampleMinOrderByAggregateInput.schema';
import { ExampleSumOrderByAggregateInputObjectSchema } from './ExampleSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExampleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ExampleCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ExampleAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ExampleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ExampleMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ExampleSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ExampleOrderByWithAggregationInputObjectSchema = Schema;
