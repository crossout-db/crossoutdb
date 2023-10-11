import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RarityCountOrderByAggregateInputObjectSchema } from './RarityCountOrderByAggregateInput.schema';
import { RarityAvgOrderByAggregateInputObjectSchema } from './RarityAvgOrderByAggregateInput.schema';
import { RarityMaxOrderByAggregateInputObjectSchema } from './RarityMaxOrderByAggregateInput.schema';
import { RarityMinOrderByAggregateInputObjectSchema } from './RarityMinOrderByAggregateInput.schema';
import { RaritySumOrderByAggregateInputObjectSchema } from './RaritySumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RarityOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    primaryColor: z.lazy(() => SortOrderSchema).optional(),
    secondaryColor: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RarityCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => RarityAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RarityMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RarityMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => RaritySumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const RarityOrderByWithAggregationInputObjectSchema = Schema;
