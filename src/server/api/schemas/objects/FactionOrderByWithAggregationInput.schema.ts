import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FactionCountOrderByAggregateInputObjectSchema } from './FactionCountOrderByAggregateInput.schema';
import { FactionAvgOrderByAggregateInputObjectSchema } from './FactionAvgOrderByAggregateInput.schema';
import { FactionMaxOrderByAggregateInputObjectSchema } from './FactionMaxOrderByAggregateInput.schema';
import { FactionMinOrderByAggregateInputObjectSchema } from './FactionMinOrderByAggregateInput.schema';
import { FactionSumOrderByAggregateInputObjectSchema } from './FactionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FactionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => FactionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => FactionAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => FactionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => FactionMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => FactionSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const FactionOrderByWithAggregationInputObjectSchema = Schema;
