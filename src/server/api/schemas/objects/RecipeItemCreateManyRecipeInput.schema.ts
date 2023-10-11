import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemCreateManyRecipeInput> = z
  .object({
    id: z.number().optional(),
    itemId: z.number(),
    quantity: z.number(),
  })
  .strict();

export const RecipeItemCreateManyRecipeInputObjectSchema = Schema;
