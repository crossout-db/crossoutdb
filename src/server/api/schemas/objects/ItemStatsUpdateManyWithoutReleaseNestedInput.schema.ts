import { z } from 'zod';
import { ItemStatsCreateWithoutReleaseInputObjectSchema } from './ItemStatsCreateWithoutReleaseInput.schema';
import { ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema } from './ItemStatsUncheckedCreateWithoutReleaseInput.schema';
import { ItemStatsCreateOrConnectWithoutReleaseInputObjectSchema } from './ItemStatsCreateOrConnectWithoutReleaseInput.schema';
import { ItemStatsUpsertWithWhereUniqueWithoutReleaseInputObjectSchema } from './ItemStatsUpsertWithWhereUniqueWithoutReleaseInput.schema';
import { ItemStatsCreateManyReleaseInputEnvelopeObjectSchema } from './ItemStatsCreateManyReleaseInputEnvelope.schema';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';
import { ItemStatsUpdateWithWhereUniqueWithoutReleaseInputObjectSchema } from './ItemStatsUpdateWithWhereUniqueWithoutReleaseInput.schema';
import { ItemStatsUpdateManyWithWhereWithoutReleaseInputObjectSchema } from './ItemStatsUpdateManyWithWhereWithoutReleaseInput.schema';
import { ItemStatsScalarWhereInputObjectSchema } from './ItemStatsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsUpdateManyWithoutReleaseNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemStatsCreateWithoutReleaseInputObjectSchema),
        z.lazy(() => ItemStatsCreateWithoutReleaseInputObjectSchema).array(),
        z.lazy(() => ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema),
        z
          .lazy(() => ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ItemStatsCreateOrConnectWithoutReleaseInputObjectSchema),
        z
          .lazy(() => ItemStatsCreateOrConnectWithoutReleaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ItemStatsUpsertWithWhereUniqueWithoutReleaseInputObjectSchema,
        ),
        z
          .lazy(
            () => ItemStatsUpsertWithWhereUniqueWithoutReleaseInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ItemStatsCreateManyReleaseInputEnvelopeObjectSchema)
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
          () => ItemStatsUpdateWithWhereUniqueWithoutReleaseInputObjectSchema,
        ),
        z
          .lazy(
            () => ItemStatsUpdateWithWhereUniqueWithoutReleaseInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ItemStatsUpdateManyWithWhereWithoutReleaseInputObjectSchema,
        ),
        z
          .lazy(
            () => ItemStatsUpdateManyWithWhereWithoutReleaseInputObjectSchema,
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

export const ItemStatsUpdateManyWithoutReleaseNestedInputObjectSchema = Schema;
