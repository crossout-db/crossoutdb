import { z } from 'zod';
import { RecipeWhereUniqueInputObjectSchema } from './RecipeWhereUniqueInput.schema';
import { RecipeCreateWithoutIngredientsInputObjectSchema } from './RecipeCreateWithoutIngredientsInput.schema';
import { RecipeUncheckedCreateWithoutIngredientsInputObjectSchema } from './RecipeUncheckedCreateWithoutIngredientsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeCreateOrConnectWithoutIngredientsInput> = z
  .object({
    where: z.lazy(() => RecipeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RecipeCreateWithoutIngredientsInputObjectSchema),
      z.lazy(() => RecipeUncheckedCreateWithoutIngredientsInputObjectSchema),
    ]),
  })
  .strict();

export const RecipeCreateOrConnectWithoutIngredientsInputObjectSchema = Schema;
