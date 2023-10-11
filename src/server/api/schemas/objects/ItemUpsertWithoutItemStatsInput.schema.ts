import { z } from 'zod';
import { ItemUpdateWithoutItemStatsInputObjectSchema } from './ItemUpdateWithoutItemStatsInput.schema';
import { ItemUncheckedUpdateWithoutItemStatsInputObjectSchema } from './ItemUncheckedUpdateWithoutItemStatsInput.schema';
import { ItemCreateWithoutItemStatsInputObjectSchema } from './ItemCreateWithoutItemStatsInput.schema';
import { ItemUncheckedCreateWithoutItemStatsInputObjectSchema } from './ItemUncheckedCreateWithoutItemStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpsertWithoutItemStatsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ItemUpdateWithoutItemStatsInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutItemStatsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutItemStatsInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutItemStatsInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithoutItemStatsInputObjectSchema = Schema;
