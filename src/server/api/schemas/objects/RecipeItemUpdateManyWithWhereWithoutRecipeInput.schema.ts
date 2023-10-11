import { z } from 'zod';
import { RecipeItemScalarWhereInputObjectSchema } from './RecipeItemScalarWhereInput.schema';
import { RecipeItemUpdateManyMutationInputObjectSchema } from './RecipeItemUpdateManyMutationInput.schema';
import { RecipeItemUncheckedUpdateManyWithoutIngredientsInputObjectSchema } from './RecipeItemUncheckedUpdateManyWithoutIngredientsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemUpdateManyWithWhereWithoutRecipeInput> =
  z
    .object({
      where: z.lazy(() => RecipeItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RecipeItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            RecipeItemUncheckedUpdateManyWithoutIngredientsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RecipeItemUpdateManyWithWhereWithoutRecipeInputObjectSchema =
  Schema;
