import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.logSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    recordId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const logSumOrderByAggregateInputObjectSchema = Schema;
