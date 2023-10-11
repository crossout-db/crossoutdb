import { z } from 'zod';
import { RecipeItemWhereUniqueInputObjectSchema } from './RecipeItemWhereUniqueInput.schema';
import { RecipeItemUpdateWithoutRecipeInputObjectSchema } from './RecipeItemUpdateWithoutRecipeInput.schema';
import { RecipeItemUncheckedUpdateWithoutRecipeInputObjectSchema } from './RecipeItemUncheckedUpdateWithoutRecipeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemUpdateWithWhereUniqueWithoutRecipeInput> =
  z
    .object({
      where: z.lazy(() => RecipeItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RecipeItemUpdateWithoutRecipeInputObjectSchema),
        z.lazy(() => RecipeItemUncheckedUpdateWithoutRecipeInputObjectSchema),
      ]),
    })
    .strict();

export const RecipeItemUpdateWithWhereUniqueWithoutRecipeInputObjectSchema =
  Schema;
