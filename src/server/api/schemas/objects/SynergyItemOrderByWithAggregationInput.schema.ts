import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SynergyItemCountOrderByAggregateInputObjectSchema } from './SynergyItemCountOrderByAggregateInput.schema';
import { SynergyItemAvgOrderByAggregateInputObjectSchema } from './SynergyItemAvgOrderByAggregateInput.schema';
import { SynergyItemMaxOrderByAggregateInputObjectSchema } from './SynergyItemMaxOrderByAggregateInput.schema';
import { SynergyItemMinOrderByAggregateInputObjectSchema } from './SynergyItemMinOrderByAggregateInput.schema';
import { SynergyItemSumOrderByAggregateInputObjectSchema } from './SynergyItemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemOrderByWithAggregationInput> = z
  .object({
    synergyId: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SynergyItemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => SynergyItemAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => SynergyItemMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => SynergyItemMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => SynergyItemSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SynergyItemOrderByWithAggregationInputObjectSchema = Schema;
