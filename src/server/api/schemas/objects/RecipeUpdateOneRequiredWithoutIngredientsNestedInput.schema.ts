import { z } from 'zod';
import { RecipeCreateWithoutIngredientsInputObjectSchema } from './RecipeCreateWithoutIngredientsInput.schema';
import { RecipeUncheckedCreateWithoutIngredientsInputObjectSchema } from './RecipeUncheckedCreateWithoutIngredientsInput.schema';
import { RecipeCreateOrConnectWithoutIngredientsInputObjectSchema } from './RecipeCreateOrConnectWithoutIngredientsInput.schema';
import { RecipeUpsertWithoutIngredientsInputObjectSchema } from './RecipeUpsertWithoutIngredientsInput.schema';
import { RecipeWhereUniqueInputObjectSchema } from './RecipeWhereUniqueInput.schema';
import { RecipeUpdateWithoutIngredientsInputObjectSchema } from './RecipeUpdateWithoutIngredientsInput.schema';
import { RecipeUncheckedUpdateWithoutIngredientsInputObjectSchema } from './RecipeUncheckedUpdateWithoutIngredientsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeUpdateOneRequiredWithoutIngredientsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RecipeCreateWithoutIngredientsInputObjectSchema),
          z.lazy(
            () => RecipeUncheckedCreateWithoutIngredientsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => RecipeCreateOrConnectWithoutIngredientsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => RecipeUpsertWithoutIngredientsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RecipeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RecipeUpdateWithoutIngredientsInputObjectSchema),
          z.lazy(
            () => RecipeUncheckedUpdateWithoutIngredientsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const RecipeUpdateOneRequiredWithoutIngredientsNestedInputObjectSchema =
  Schema;
