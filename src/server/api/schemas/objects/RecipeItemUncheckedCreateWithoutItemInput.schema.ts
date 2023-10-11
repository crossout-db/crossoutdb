import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemUncheckedCreateWithoutItemInput> = z
  .object({
    id: z.number().optional(),
    recipeId: z.number(),
    quantity: z.number(),
  })
  .strict();

export const RecipeItemUncheckedCreateWithoutItemInputObjectSchema = Schema;
