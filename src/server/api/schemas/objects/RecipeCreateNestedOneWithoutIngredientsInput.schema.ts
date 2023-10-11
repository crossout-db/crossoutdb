import { z } from 'zod';
import { RecipeCreateWithoutIngredientsInputObjectSchema } from './RecipeCreateWithoutIngredientsInput.schema';
import { RecipeUncheckedCreateWithoutIngredientsInputObjectSchema } from './RecipeUncheckedCreateWithoutIngredientsInput.schema';
import { RecipeCreateOrConnectWithoutIngredientsInputObjectSchema } from './RecipeCreateOrConnectWithoutIngredientsInput.schema';
import { RecipeWhereUniqueInputObjectSchema } from './RecipeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeCreateNestedOneWithoutIngredientsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RecipeCreateWithoutIngredientsInputObjectSchema),
        z.lazy(() => RecipeUncheckedCreateWithoutIngredientsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RecipeCreateOrConnectWithoutIngredientsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => RecipeWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const RecipeCreateNestedOneWithoutIngredientsInputObjectSchema = Schema;
