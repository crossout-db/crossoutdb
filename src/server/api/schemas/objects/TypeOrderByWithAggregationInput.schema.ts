import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TypeCountOrderByAggregateInputObjectSchema } from './TypeCountOrderByAggregateInput.schema';
import { TypeAvgOrderByAggregateInputObjectSchema } from './TypeAvgOrderByAggregateInput.schema';
import { TypeMaxOrderByAggregateInputObjectSchema } from './TypeMaxOrderByAggregateInput.schema';
import { TypeMinOrderByAggregateInputObjectSchema } from './TypeMinOrderByAggregateInput.schema';
import { TypeSumOrderByAggregateInputObjectSchema } from './TypeSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TypeOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => TypeCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => TypeAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TypeMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TypeMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => TypeSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TypeOrderByWithAggregationInputObjectSchema = Schema;
