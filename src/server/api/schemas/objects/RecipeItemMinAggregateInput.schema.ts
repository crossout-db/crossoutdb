import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    recipeId: z.literal(true).optional(),
    itemId: z.literal(true).optional(),
    quantity: z.literal(true).optional(),
  })
  .strict();

export const RecipeItemMinAggregateInputObjectSchema = Schema;
