import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    resultItemId: z.literal(true).optional(),
    quantity: z.literal(true).optional(),
    releaseId: z.literal(true).optional(),
    craftCost: z.literal(true).optional(),
    timestamp: z.literal(true).optional(),
    active: z.literal(true).optional(),
  })
  .strict();

export const RecipeMaxAggregateInputObjectSchema = Schema;
