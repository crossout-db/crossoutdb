import { z } from 'zod';
import { ItemStatsCreateWithoutUserInputObjectSchema } from './ItemStatsCreateWithoutUserInput.schema';
import { ItemStatsUncheckedCreateWithoutUserInputObjectSchema } from './ItemStatsUncheckedCreateWithoutUserInput.schema';
import { ItemStatsCreateOrConnectWithoutUserInputObjectSchema } from './ItemStatsCreateOrConnectWithoutUserInput.schema';
import { ItemStatsUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ItemStatsUpsertWithWhereUniqueWithoutUserInput.schema';
import { ItemStatsCreateManyUserInputEnvelopeObjectSchema } from './ItemStatsCreateManyUserInputEnvelope.schema';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';
import { ItemStatsUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ItemStatsUpdateWithWhereUniqueWithoutUserInput.schema';
import { ItemStatsUpdateManyWithWhereWithoutUserInputObjectSchema } from './ItemStatsUpdateManyWithWhereWithoutUserInput.schema';
import { ItemStatsScalarWhereInputObjectSchema } from './ItemStatsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemStatsCreateWithoutUserInputObjectSchema),
          z.lazy(() => ItemStatsCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ItemStatsUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ItemStatsUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemStatsCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => ItemStatsCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ItemStatsUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ItemStatsUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemStatsCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
          z.lazy(() => ItemStatsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
          z.lazy(() => ItemStatsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
          z.lazy(() => ItemStatsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
          z.lazy(() => ItemStatsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ItemStatsUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ItemStatsUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ItemStatsUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ItemStatsUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ItemStatsScalarWhereInputObjectSchema),
          z.lazy(() => ItemStatsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemStatsUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
