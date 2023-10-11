import { z } from 'zod';
import { RecipeCreateNestedOneWithoutIngredientsInputObjectSchema } from './RecipeCreateNestedOneWithoutIngredientsInput.schema';
import { ItemCreateNestedOneWithoutRecipeItemsInputObjectSchema } from './ItemCreateNestedOneWithoutRecipeItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemCreateInput> = z
  .object({
    quantity: z.number(),
    recipe: z.lazy(
      () => RecipeCreateNestedOneWithoutIngredientsInputObjectSchema,
    ),
    item: z.lazy(() => ItemCreateNestedOneWithoutRecipeItemsInputObjectSchema),
  })
  .strict();

export const RecipeItemCreateInputObjectSchema = Schema;
