import { z } from 'zod';
import { RecipeItemScalarWhereInputObjectSchema } from './RecipeItemScalarWhereInput.schema';
import { RecipeItemUpdateManyMutationInputObjectSchema } from './RecipeItemUpdateManyMutationInput.schema';
import { RecipeItemUncheckedUpdateManyWithoutRecipeItemsInputObjectSchema } from './RecipeItemUncheckedUpdateManyWithoutRecipeItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemUpdateManyWithWhereWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => RecipeItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RecipeItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            RecipeItemUncheckedUpdateManyWithoutRecipeItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RecipeItemUpdateManyWithWhereWithoutItemInputObjectSchema = Schema;
