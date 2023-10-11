import { z } from 'zod';
import { RecipeCreateNestedOneWithoutIngredientsInputObjectSchema } from './RecipeCreateNestedOneWithoutIngredientsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemCreateWithoutItemInput> = z
  .object({
    quantity: z.number(),
    recipe: z.lazy(
      () => RecipeCreateNestedOneWithoutIngredientsInputObjectSchema,
    ),
  })
  .strict();

export const RecipeItemCreateWithoutItemInputObjectSchema = Schema;
