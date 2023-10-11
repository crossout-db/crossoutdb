import { z } from 'zod';
import { ReleaseCreateNestedOneWithoutRecipesInputObjectSchema } from './ReleaseCreateNestedOneWithoutRecipesInput.schema';
import { RecipeItemCreateNestedManyWithoutRecipeInputObjectSchema } from './RecipeItemCreateNestedManyWithoutRecipeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeCreateWithoutResultInput> = z
  .object({
    quantity: z.number(),
    craftCost: z.number().optional().nullable(),
    timestamp: z.coerce.date().optional().nullable(),
    active: z.boolean(),
    release: z
      .lazy(() => ReleaseCreateNestedOneWithoutRecipesInputObjectSchema)
      .optional(),
    ingredients: z
      .lazy(() => RecipeItemCreateNestedManyWithoutRecipeInputObjectSchema)
      .optional(),
  })
  .strict();

export const RecipeCreateWithoutResultInputObjectSchema = Schema;
