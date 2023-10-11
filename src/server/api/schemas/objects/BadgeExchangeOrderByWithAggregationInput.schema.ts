import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BadgeExchangeCountOrderByAggregateInputObjectSchema } from './BadgeExchangeCountOrderByAggregateInput.schema';
import { BadgeExchangeAvgOrderByAggregateInputObjectSchema } from './BadgeExchangeAvgOrderByAggregateInput.schema';
import { BadgeExchangeMaxOrderByAggregateInputObjectSchema } from './BadgeExchangeMaxOrderByAggregateInput.schema';
import { BadgeExchangeMinOrderByAggregateInputObjectSchema } from './BadgeExchangeMinOrderByAggregateInput.schema';
import { BadgeExchangeSumOrderByAggregateInputObjectSchema } from './BadgeExchangeSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BadgeExchangeOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    badges: z.lazy(() => SortOrderSchema).optional(),
    active: z.lazy(() => SortOrderSchema).optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => BadgeExchangeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => BadgeExchangeAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => BadgeExchangeMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => BadgeExchangeMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => BadgeExchangeSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BadgeExchangeOrderByWithAggregationInputObjectSchema = Schema;
