import { z } from 'zod';
import { PackItemCreateWithoutItemInputObjectSchema } from './PackItemCreateWithoutItemInput.schema';
import { PackItemUncheckedCreateWithoutItemInputObjectSchema } from './PackItemUncheckedCreateWithoutItemInput.schema';
import { PackItemCreateOrConnectWithoutItemInputObjectSchema } from './PackItemCreateOrConnectWithoutItemInput.schema';
import { PackItemUpsertWithWhereUniqueWithoutItemInputObjectSchema } from './PackItemUpsertWithWhereUniqueWithoutItemInput.schema';
import { PackItemCreateManyItemInputEnvelopeObjectSchema } from './PackItemCreateManyItemInputEnvelope.schema';
import { PackItemWhereUniqueInputObjectSchema } from './PackItemWhereUniqueInput.schema';
import { PackItemUpdateWithWhereUniqueWithoutItemInputObjectSchema } from './PackItemUpdateWithWhereUniqueWithoutItemInput.schema';
import { PackItemUpdateManyWithWhereWithoutItemInputObjectSchema } from './PackItemUpdateManyWithWhereWithoutItemInput.schema';
import { PackItemScalarWhereInputObjectSchema } from './PackItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemUncheckedUpdateManyWithoutItemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PackItemCreateWithoutItemInputObjectSchema),
          z.lazy(() => PackItemCreateWithoutItemInputObjectSchema).array(),
          z.lazy(() => PackItemUncheckedCreateWithoutItemInputObjectSchema),
          z
            .lazy(() => PackItemUncheckedCreateWithoutItemInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PackItemCreateOrConnectWithoutItemInputObjectSchema),
          z
            .lazy(() => PackItemCreateOrConnectWithoutItemInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => PackItemUpsertWithWhereUniqueWithoutItemInputObjectSchema,
          ),
          z
            .lazy(
              () => PackItemUpsertWithWhereUniqueWithoutItemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PackItemCreateManyItemInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PackItemWhereUniqueInputObjectSchema),
          z.lazy(() => PackItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PackItemWhereUniqueInputObjectSchema),
          z.lazy(() => PackItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PackItemWhereUniqueInputObjectSchema),
          z.lazy(() => PackItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PackItemWhereUniqueInputObjectSchema),
          z.lazy(() => PackItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => PackItemUpdateWithWhereUniqueWithoutItemInputObjectSchema,
          ),
          z
            .lazy(
              () => PackItemUpdateWithWhereUniqueWithoutItemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PackItemUpdateManyWithWhereWithoutItemInputObjectSchema),
          z
            .lazy(() => PackItemUpdateManyWithWhereWithoutItemInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PackItemScalarWhereInputObjectSchema),
          z.lazy(() => PackItemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PackItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema =
  Schema;
