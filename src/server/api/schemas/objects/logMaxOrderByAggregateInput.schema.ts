import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.logMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    tableChanged: z.lazy(() => SortOrderSchema).optional(),
    recordId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const logMaxOrderByAggregateInputObjectSchema = Schema;
