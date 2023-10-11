import { z } from 'zod';
import { RecipeCreateWithoutResultInputObjectSchema } from './RecipeCreateWithoutResultInput.schema';
import { RecipeUncheckedCreateWithoutResultInputObjectSchema } from './RecipeUncheckedCreateWithoutResultInput.schema';
import { RecipeCreateOrConnectWithoutResultInputObjectSchema } from './RecipeCreateOrConnectWithoutResultInput.schema';
import { RecipeUpsertWithWhereUniqueWithoutResultInputObjectSchema } from './RecipeUpsertWithWhereUniqueWithoutResultInput.schema';
import { RecipeCreateManyResultInputEnvelopeObjectSchema } from './RecipeCreateManyResultInputEnvelope.schema';
import { RecipeWhereUniqueInputObjectSchema } from './RecipeWhereUniqueInput.schema';
import { RecipeUpdateWithWhereUniqueWithoutResultInputObjectSchema } from './RecipeUpdateWithWhereUniqueWithoutResultInput.schema';
import { RecipeUpdateManyWithWhereWithoutResultInputObjectSchema } from './RecipeUpdateManyWithWhereWithoutResultInput.schema';
import { RecipeScalarWhereInputObjectSchema } from './RecipeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeUncheckedUpdateManyWithoutResultNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RecipeCreateWithoutResultInputObjectSchema),
          z.lazy(() => RecipeCreateWithoutResultInputObjectSchema).array(),
          z.lazy(() => RecipeUncheckedCreateWithoutResultInputObjectSchema),
          z
            .lazy(() => RecipeUncheckedCreateWithoutResultInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RecipeCreateOrConnectWithoutResultInputObjectSchema),
          z
            .lazy(() => RecipeCreateOrConnectWithoutResultInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => RecipeUpsertWithWhereUniqueWithoutResultInputObjectSchema,
          ),
          z
            .lazy(
              () => RecipeUpsertWithWhereUniqueWithoutResultInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RecipeCreateManyResultInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => RecipeWhereUniqueInputObjectSchema),
          z.lazy(() => RecipeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RecipeWhereUniqueInputObjectSchema),
          z.lazy(() => RecipeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RecipeWhereUniqueInputObjectSchema),
          z.lazy(() => RecipeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RecipeWhereUniqueInputObjectSchema),
          z.lazy(() => RecipeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => RecipeUpdateWithWhereUniqueWithoutResultInputObjectSchema,
          ),
          z
            .lazy(
              () => RecipeUpdateWithWhereUniqueWithoutResultInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => RecipeUpdateManyWithWhereWithoutResultInputObjectSchema),
          z
            .lazy(() => RecipeUpdateManyWithWhereWithoutResultInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RecipeScalarWhereInputObjectSchema),
          z.lazy(() => RecipeScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RecipeUncheckedUpdateManyWithoutResultNestedInputObjectSchema =
  Schema;
