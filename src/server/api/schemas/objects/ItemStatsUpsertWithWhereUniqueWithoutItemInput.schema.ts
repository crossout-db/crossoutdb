import { z } from 'zod';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';
import { ItemStatsUpdateWithoutItemInputObjectSchema } from './ItemStatsUpdateWithoutItemInput.schema';
import { ItemStatsUncheckedUpdateWithoutItemInputObjectSchema } from './ItemStatsUncheckedUpdateWithoutItemInput.schema';
import { ItemStatsCreateWithoutItemInputObjectSchema } from './ItemStatsCreateWithoutItemInput.schema';
import { ItemStatsUncheckedCreateWithoutItemInputObjectSchema } from './ItemStatsUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsUpsertWithWhereUniqueWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ItemStatsUpdateWithoutItemInputObjectSchema),
        z.lazy(() => ItemStatsUncheckedUpdateWithoutItemInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ItemStatsCreateWithoutItemInputObjectSchema),
        z.lazy(() => ItemStatsUncheckedCreateWithoutItemInputObjectSchema),
      ]),
    })
    .strict();

export const ItemStatsUpsertWithWhereUniqueWithoutItemInputObjectSchema =
  Schema;
