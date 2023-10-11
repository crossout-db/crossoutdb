import { z } from 'zod';
import { ItemCreateWithoutRarityInputObjectSchema } from './ItemCreateWithoutRarityInput.schema';
import { ItemUncheckedCreateWithoutRarityInputObjectSchema } from './ItemUncheckedCreateWithoutRarityInput.schema';
import { ItemCreateOrConnectWithoutRarityInputObjectSchema } from './ItemCreateOrConnectWithoutRarityInput.schema';
import { ItemUpsertWithWhereUniqueWithoutRarityInputObjectSchema } from './ItemUpsertWithWhereUniqueWithoutRarityInput.schema';
import { ItemCreateManyRarityInputEnvelopeObjectSchema } from './ItemCreateManyRarityInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithWhereUniqueWithoutRarityInputObjectSchema } from './ItemUpdateWithWhereUniqueWithoutRarityInput.schema';
import { ItemUpdateManyWithWhereWithoutRarityInputObjectSchema } from './ItemUpdateManyWithWhereWithoutRarityInput.schema';
import { ItemScalarWhereInputObjectSchema } from './ItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUncheckedUpdateManyWithoutRarityNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemCreateWithoutRarityInputObjectSchema),
          z.lazy(() => ItemCreateWithoutRarityInputObjectSchema).array(),
          z.lazy(() => ItemUncheckedCreateWithoutRarityInputObjectSchema),
          z
            .lazy(() => ItemUncheckedCreateWithoutRarityInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemCreateOrConnectWithoutRarityInputObjectSchema),
          z
            .lazy(() => ItemCreateOrConnectWithoutRarityInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => ItemUpsertWithWhereUniqueWithoutRarityInputObjectSchema),
          z
            .lazy(() => ItemUpsertWithWhereUniqueWithoutRarityInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemCreateManyRarityInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ItemWhereUniqueInputObjectSchema),
          z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ItemWhereUniqueInputObjectSchema),
          z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ItemWhereUniqueInputObjectSchema),
          z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemWhereUniqueInputObjectSchema),
          z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => ItemUpdateWithWhereUniqueWithoutRarityInputObjectSchema),
          z
            .lazy(() => ItemUpdateWithWhereUniqueWithoutRarityInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ItemUpdateManyWithWhereWithoutRarityInputObjectSchema),
          z
            .lazy(() => ItemUpdateManyWithWhereWithoutRarityInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ItemScalarWhereInputObjectSchema),
          z.lazy(() => ItemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemUncheckedUpdateManyWithoutRarityNestedInputObjectSchema =
  Schema;
