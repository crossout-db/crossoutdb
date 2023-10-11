import { z } from 'zod';
import { RecipeUpdateWithoutIngredientsInputObjectSchema } from './RecipeUpdateWithoutIngredientsInput.schema';
import { RecipeUncheckedUpdateWithoutIngredientsInputObjectSchema } from './RecipeUncheckedUpdateWithoutIngredientsInput.schema';
import { RecipeCreateWithoutIngredientsInputObjectSchema } from './RecipeCreateWithoutIngredientsInput.schema';
import { RecipeUncheckedCreateWithoutIngredientsInputObjectSchema } from './RecipeUncheckedCreateWithoutIngredientsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeUpsertWithoutIngredientsInput> = z
  .object({
    update: z.union([
      z.lazy(() => RecipeUpdateWithoutIngredientsInputObjectSchema),
      z.lazy(() => RecipeUncheckedUpdateWithoutIngredientsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RecipeCreateWithoutIngredientsInputObjectSchema),
      z.lazy(() => RecipeUncheckedCreateWithoutIngredientsInputObjectSchema),
    ]),
  })
  .strict();

export const RecipeUpsertWithoutIngredientsInputObjectSchema = Schema;
