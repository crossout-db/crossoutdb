import { z } from 'zod';
import { ItemCreateWithoutItemStatsInputObjectSchema } from './ItemCreateWithoutItemStatsInput.schema';
import { ItemUncheckedCreateWithoutItemStatsInputObjectSchema } from './ItemUncheckedCreateWithoutItemStatsInput.schema';
import { ItemCreateOrConnectWithoutItemStatsInputObjectSchema } from './ItemCreateOrConnectWithoutItemStatsInput.schema';
import { ItemUpsertWithoutItemStatsInputObjectSchema } from './ItemUpsertWithoutItemStatsInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutItemStatsInputObjectSchema } from './ItemUpdateWithoutItemStatsInput.schema';
import { ItemUncheckedUpdateWithoutItemStatsInputObjectSchema } from './ItemUncheckedUpdateWithoutItemStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateOneRequiredWithoutItemStatsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemCreateWithoutItemStatsInputObjectSchema),
          z.lazy(() => ItemUncheckedCreateWithoutItemStatsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ItemCreateOrConnectWithoutItemStatsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ItemUpsertWithoutItemStatsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ItemUpdateWithoutItemStatsInputObjectSchema),
          z.lazy(() => ItemUncheckedUpdateWithoutItemStatsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemUpdateOneRequiredWithoutItemStatsNestedInputObjectSchema =
  Schema;
