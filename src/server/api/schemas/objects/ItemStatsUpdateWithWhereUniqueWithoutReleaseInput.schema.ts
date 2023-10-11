import { z } from 'zod';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';
import { ItemStatsUpdateWithoutReleaseInputObjectSchema } from './ItemStatsUpdateWithoutReleaseInput.schema';
import { ItemStatsUncheckedUpdateWithoutReleaseInputObjectSchema } from './ItemStatsUncheckedUpdateWithoutReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsUpdateWithWhereUniqueWithoutReleaseInput> =
  z
    .object({
      where: z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ItemStatsUpdateWithoutReleaseInputObjectSchema),
        z.lazy(() => ItemStatsUncheckedUpdateWithoutReleaseInputObjectSchema),
      ]),
    })
    .strict();

export const ItemStatsUpdateWithWhereUniqueWithoutReleaseInputObjectSchema =
  Schema;
