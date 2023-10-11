import { z } from 'zod';
import { RecipeItemCreateWithoutItemInputObjectSchema } from './RecipeItemCreateWithoutItemInput.schema';
import { RecipeItemUncheckedCreateWithoutItemInputObjectSchema } from './RecipeItemUncheckedCreateWithoutItemInput.schema';
import { RecipeItemCreateOrConnectWithoutItemInputObjectSchema } from './RecipeItemCreateOrConnectWithoutItemInput.schema';
import { RecipeItemUpsertWithWhereUniqueWithoutItemInputObjectSchema } from './RecipeItemUpsertWithWhereUniqueWithoutItemInput.schema';
import { RecipeItemCreateManyItemInputEnvelopeObjectSchema } from './RecipeItemCreateManyItemInputEnvelope.schema';
import { RecipeItemWhereUniqueInputObjectSchema } from './RecipeItemWhereUniqueInput.schema';
import { RecipeItemUpdateWithWhereUniqueWithoutItemInputObjectSchema } from './RecipeItemUpdateWithWhereUniqueWithoutItemInput.schema';
import { RecipeItemUpdateManyWithWhereWithoutItemInputObjectSchema } from './RecipeItemUpdateManyWithWhereWithoutItemInput.schema';
import { RecipeItemScalarWhereInputObjectSchema } from './RecipeItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemUncheckedUpdateManyWithoutItemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RecipeItemCreateWithoutItemInputObjectSchema),
          z.lazy(() => RecipeItemCreateWithoutItemInputObjectSchema).array(),
          z.lazy(() => RecipeItemUncheckedCreateWithoutItemInputObjectSchema),
          z
            .lazy(() => RecipeItemUncheckedCreateWithoutItemInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RecipeItemCreateOrConnectWithoutItemInputObjectSchema),
          z
            .lazy(() => RecipeItemCreateOrConnectWithoutItemInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => RecipeItemUpsertWithWhereUniqueWithoutItemInputObjectSchema,
          ),
          z
            .lazy(
              () => RecipeItemUpsertWithWhereUniqueWithoutItemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RecipeItemCreateManyItemInputEnvelopeObjectSchema)
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
            () => RecipeItemUpdateWithWhereUniqueWithoutItemInputObjectSchema,
          ),
          z
            .lazy(
              () => RecipeItemUpdateWithWhereUniqueWithoutItemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => RecipeItemUpdateManyWithWhereWithoutItemInputObjectSchema,
          ),
          z
            .lazy(
              () => RecipeItemUpdateManyWithWhereWithoutItemInputObjectSchema,
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

export const RecipeItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema =
  Schema;
