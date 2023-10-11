import { z } from 'zod';
import { RecipeItemCreateWithoutRecipeInputObjectSchema } from './RecipeItemCreateWithoutRecipeInput.schema';
import { RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema } from './RecipeItemUncheckedCreateWithoutRecipeInput.schema';
import { RecipeItemCreateOrConnectWithoutRecipeInputObjectSchema } from './RecipeItemCreateOrConnectWithoutRecipeInput.schema';
import { RecipeItemUpsertWithWhereUniqueWithoutRecipeInputObjectSchema } from './RecipeItemUpsertWithWhereUniqueWithoutRecipeInput.schema';
import { RecipeItemCreateManyRecipeInputEnvelopeObjectSchema } from './RecipeItemCreateManyRecipeInputEnvelope.schema';
import { RecipeItemWhereUniqueInputObjectSchema } from './RecipeItemWhereUniqueInput.schema';
import { RecipeItemUpdateWithWhereUniqueWithoutRecipeInputObjectSchema } from './RecipeItemUpdateWithWhereUniqueWithoutRecipeInput.schema';
import { RecipeItemUpdateManyWithWhereWithoutRecipeInputObjectSchema } from './RecipeItemUpdateManyWithWhereWithoutRecipeInput.schema';
import { RecipeItemScalarWhereInputObjectSchema } from './RecipeItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemUncheckedUpdateManyWithoutRecipeNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RecipeItemCreateWithoutRecipeInputObjectSchema),
          z.lazy(() => RecipeItemCreateWithoutRecipeInputObjectSchema).array(),
          z.lazy(() => RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema),
          z
            .lazy(() => RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RecipeItemCreateOrConnectWithoutRecipeInputObjectSchema),
          z
            .lazy(() => RecipeItemCreateOrConnectWithoutRecipeInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => RecipeItemUpsertWithWhereUniqueWithoutRecipeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RecipeItemUpsertWithWhereUniqueWithoutRecipeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RecipeItemCreateManyRecipeInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => RecipeItemWhereUniqueInputObjectSchema),
          z.lazy(() => RecipeItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RecipeItemWhereUniqueInputObjectSchema),
          z.lazy(() => RecipeItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RecipeItemWhereUniqueInputObjectSchema),
          z.lazy(() => RecipeItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RecipeItemWhereUniqueInputObjectSchema),
          z.lazy(() => RecipeItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => RecipeItemUpdateWithWhereUniqueWithoutRecipeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RecipeItemUpdateWithWhereUniqueWithoutRecipeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => RecipeItemUpdateManyWithWhereWithoutRecipeInputObjectSchema,
          ),
          z
            .lazy(
              () => RecipeItemUpdateManyWithWhereWithoutRecipeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RecipeItemScalarWhereInputObjectSchema),
          z.lazy(() => RecipeItemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RecipeItemUncheckedUpdateManyWithoutRecipeNestedInputObjectSchema =
  Schema;
