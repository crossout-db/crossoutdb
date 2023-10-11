import { z } from 'zod';
import { RecipeCreateWithoutReleaseInputObjectSchema } from './RecipeCreateWithoutReleaseInput.schema';
import { RecipeUncheckedCreateWithoutReleaseInputObjectSchema } from './RecipeUncheckedCreateWithoutReleaseInput.schema';
import { RecipeCreateOrConnectWithoutReleaseInputObjectSchema } from './RecipeCreateOrConnectWithoutReleaseInput.schema';
import { RecipeUpsertWithWhereUniqueWithoutReleaseInputObjectSchema } from './RecipeUpsertWithWhereUniqueWithoutReleaseInput.schema';
import { RecipeCreateManyReleaseInputEnvelopeObjectSchema } from './RecipeCreateManyReleaseInputEnvelope.schema';
import { RecipeWhereUniqueInputObjectSchema } from './RecipeWhereUniqueInput.schema';
import { RecipeUpdateWithWhereUniqueWithoutReleaseInputObjectSchema } from './RecipeUpdateWithWhereUniqueWithoutReleaseInput.schema';
import { RecipeUpdateManyWithWhereWithoutReleaseInputObjectSchema } from './RecipeUpdateManyWithWhereWithoutReleaseInput.schema';
import { RecipeScalarWhereInputObjectSchema } from './RecipeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeUpdateManyWithoutReleaseNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RecipeCreateWithoutReleaseInputObjectSchema),
        z.lazy(() => RecipeCreateWithoutReleaseInputObjectSchema).array(),
        z.lazy(() => RecipeUncheckedCreateWithoutReleaseInputObjectSchema),
        z
          .lazy(() => RecipeUncheckedCreateWithoutReleaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RecipeCreateOrConnectWithoutReleaseInputObjectSchema),
        z
          .lazy(() => RecipeCreateOrConnectWithoutReleaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => RecipeUpsertWithWhereUniqueWithoutReleaseInputObjectSchema,
        ),
        z
          .lazy(
            () => RecipeUpsertWithWhereUniqueWithoutReleaseInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RecipeCreateManyReleaseInputEnvelopeObjectSchema)
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
          () => RecipeUpdateWithWhereUniqueWithoutReleaseInputObjectSchema,
        ),
        z
          .lazy(
            () => RecipeUpdateWithWhereUniqueWithoutReleaseInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RecipeUpdateManyWithWhereWithoutReleaseInputObjectSchema),
        z
          .lazy(() => RecipeUpdateManyWithWhereWithoutReleaseInputObjectSchema)
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

export const RecipeUpdateManyWithoutReleaseNestedInputObjectSchema = Schema;
