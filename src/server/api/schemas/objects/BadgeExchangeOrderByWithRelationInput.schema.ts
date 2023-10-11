import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BadgeExchangeOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    badges: z.lazy(() => SortOrderSchema).optional(),
    active: z.lazy(() => SortOrderSchema).optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const BadgeExchangeOrderByWithRelationInputObjectSchema = Schema;
