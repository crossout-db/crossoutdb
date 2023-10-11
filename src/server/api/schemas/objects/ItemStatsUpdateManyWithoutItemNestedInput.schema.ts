import { z } from 'zod';
import { ItemStatsCreateWithoutItemInputObjectSchema } from './ItemStatsCreateWithoutItemInput.schema';
import { ItemStatsUncheckedCreateWithoutItemInputObjectSchema } from './ItemStatsUncheckedCreateWithoutItemInput.schema';
import { ItemStatsCreateOrConnectWithoutItemInputObjectSchema } from './ItemStatsCreateOrConnectWithoutItemInput.schema';
import { ItemStatsUpsertWithWhereUniqueWithoutItemInputObjectSchema } from './ItemStatsUpsertWithWhereUniqueWithoutItemInput.schema';
import { ItemStatsCreateManyItemInputEnvelopeObjectSchema } from './ItemStatsCreateManyItemInputEnvelope.schema';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';
import { ItemStatsUpdateWithWhereUniqueWithoutItemInputObjectSchema } from './ItemStatsUpdateWithWhereUniqueWithoutItemInput.schema';
import { ItemStatsUpdateManyWithWhereWithoutItemInputObjectSchema } from './ItemStatsUpdateManyWithWhereWithoutItemInput.schema';
import { ItemStatsScalarWhereInputObjectSchema } from './ItemStatsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsUpdateManyWithoutItemNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemStatsCreateWithoutItemInputObjectSchema),
        z.lazy(() => ItemStatsCreateWithoutItemInputObjectSchema).array(),
        z.lazy(() => ItemStatsUncheckedCreateWithoutItemInputObjectSchema),
        z
          .lazy(() => ItemStatsUncheckedCreateWithoutItemInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ItemStatsCreateOrConnectWithoutItemInputObjectSchema),
        z
          .lazy(() => ItemStatsCreateOrConnectWithoutItemInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ItemStatsUpsertWithWhereUniqueWithoutItemInputObjectSchema,
        ),
        z
          .lazy(
            () => ItemStatsUpsertWithWhereUniqueWithoutItemInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ItemStatsCreateManyItemInputEnvelopeObjectSchema)
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
          () => ItemStatsUpdateWithWhereUniqueWithoutItemInputObjectSchema,
        ),
        z
          .lazy(
            () => ItemStatsUpdateWithWhereUniqueWithoutItemInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ItemStatsUpdateManyWithWhereWithoutItemInputObjectSchema),
        z
          .lazy(() => ItemStatsUpdateManyWithWhereWithoutItemInputObjectSchema)
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

export const ItemStatsUpdateManyWithoutItemNestedInputObjectSchema = Schema;
