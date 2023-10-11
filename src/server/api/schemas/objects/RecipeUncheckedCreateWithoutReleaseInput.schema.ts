import { z } from 'zod';
import { RecipeItemUncheckedCreateNestedManyWithoutRecipeInputObjectSchema } from './RecipeItemUncheckedCreateNestedManyWithoutRecipeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeUncheckedCreateWithoutReleaseInput> = z
  .object({
    id: z.number().optional(),
    resultItemId: z.number(),
    quantity: z.number(),
    craftCost: z.number().optional().nullable(),
    timestamp: z.coerce.date().optional().nullable(),
    active: z.boolean(),
    ingredients: z
      .lazy(
        () => RecipeItemUncheckedCreateNestedManyWithoutRecipeInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RecipeUncheckedCreateWithoutReleaseInputObjectSchema = Schema;
