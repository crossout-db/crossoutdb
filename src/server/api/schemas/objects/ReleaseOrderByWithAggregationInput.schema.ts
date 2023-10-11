import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReleaseCountOrderByAggregateInputObjectSchema } from './ReleaseCountOrderByAggregateInput.schema';
import { ReleaseAvgOrderByAggregateInputObjectSchema } from './ReleaseAvgOrderByAggregateInput.schema';
import { ReleaseMaxOrderByAggregateInputObjectSchema } from './ReleaseMaxOrderByAggregateInput.schema';
import { ReleaseMinOrderByAggregateInputObjectSchema } from './ReleaseMinOrderByAggregateInput.schema';
import { ReleaseSumOrderByAggregateInputObjectSchema } from './ReleaseSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    xoVersion: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    build: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    battlePass: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    url: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    startDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    endDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    active: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ReleaseCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ReleaseAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ReleaseMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ReleaseMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ReleaseSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ReleaseOrderByWithAggregationInputObjectSchema = Schema;
