import { z } from 'zod';
import { RecipeItemWhereUniqueInputObjectSchema } from './RecipeItemWhereUniqueInput.schema';
import { RecipeItemUpdateWithoutRecipeInputObjectSchema } from './RecipeItemUpdateWithoutRecipeInput.schema';
import { RecipeItemUncheckedUpdateWithoutRecipeInputObjectSchema } from './RecipeItemUncheckedUpdateWithoutRecipeInput.schema';
import { RecipeItemCreateWithoutRecipeInputObjectSchema } from './RecipeItemCreateWithoutRecipeInput.schema';
import { RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema } from './RecipeItemUncheckedCreateWithoutRecipeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemUpsertWithWhereUniqueWithoutRecipeInput> =
  z
    .object({
      where: z.lazy(() => RecipeItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RecipeItemUpdateWithoutRecipeInputObjectSchema),
        z.lazy(() => RecipeItemUncheckedUpdateWithoutRecipeInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RecipeItemCreateWithoutRecipeInputObjectSchema),
        z.lazy(() => RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema),
      ]),
    })
    .strict();

export const RecipeItemUpsertWithWhereUniqueWithoutRecipeInputObjectSchema =
  Schema;
