import { z } from 'zod';
import { ItemCreateNestedOneWithoutRecipesInputObjectSchema } from './ItemCreateNestedOneWithoutRecipesInput.schema';
import { RecipeItemCreateNestedManyWithoutRecipeInputObjectSchema } from './RecipeItemCreateNestedManyWithoutRecipeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeCreateWithoutReleaseInput> = z
  .object({
    quantity: z.number(),
    craftCost: z.number().optional().nullable(),
    timestamp: z.coerce.date().optional().nullable(),
    active: z.boolean(),
    result: z.lazy(() => ItemCreateNestedOneWithoutRecipesInputObjectSchema),
    ingredients: z
      .lazy(() => RecipeItemCreateNestedManyWithoutRecipeInputObjectSchema)
      .optional(),
  })
  .strict();

export const RecipeCreateWithoutReleaseInputObjectSchema = Schema;
