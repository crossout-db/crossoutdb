import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SynergyCountOrderByAggregateInputObjectSchema } from './SynergyCountOrderByAggregateInput.schema';
import { SynergyAvgOrderByAggregateInputObjectSchema } from './SynergyAvgOrderByAggregateInput.schema';
import { SynergyMaxOrderByAggregateInputObjectSchema } from './SynergyMaxOrderByAggregateInput.schema';
import { SynergyMinOrderByAggregateInputObjectSchema } from './SynergyMinOrderByAggregateInput.schema';
import { SynergySumOrderByAggregateInputObjectSchema } from './SynergySumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SynergyCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => SynergyAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SynergyMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SynergyMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => SynergySumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SynergyOrderByWithAggregationInputObjectSchema = Schema;
