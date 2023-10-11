import { z } from 'zod';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';
import { ItemStatsUpdateWithoutItemInputObjectSchema } from './ItemStatsUpdateWithoutItemInput.schema';
import { ItemStatsUncheckedUpdateWithoutItemInputObjectSchema } from './ItemStatsUncheckedUpdateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsUpdateWithWhereUniqueWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ItemStatsUpdateWithoutItemInputObjectSchema),
        z.lazy(() => ItemStatsUncheckedUpdateWithoutItemInputObjectSchema),
      ]),
    })
    .strict();

export const ItemStatsUpdateWithWhereUniqueWithoutItemInputObjectSchema =
  Schema;
