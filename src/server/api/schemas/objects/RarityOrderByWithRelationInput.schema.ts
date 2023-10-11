import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ItemOrderByRelationAggregateInputObjectSchema } from './ItemOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RarityOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    primaryColor: z.lazy(() => SortOrderSchema).optional(),
    secondaryColor: z.lazy(() => SortOrderSchema).optional(),
    items: z
      .lazy(() => ItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RarityOrderByWithRelationInputObjectSchema = Schema;
