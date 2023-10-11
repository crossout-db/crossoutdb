import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    resultItemId: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    releaseId: z.lazy(() => SortOrderSchema).optional(),
    craftCost: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RecipeSumOrderByAggregateInputObjectSchema = Schema;
