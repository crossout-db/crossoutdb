import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemCreateManyInput> = z
  .object({
    id: z.number().optional(),
    recipeId: z.number(),
    itemId: z.number(),
    quantity: z.number(),
  })
  .strict();

export const RecipeItemCreateManyInputObjectSchema = Schema;
