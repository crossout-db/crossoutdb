import { z } from 'zod';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';
import { ItemStatsUpdateWithoutReleaseInputObjectSchema } from './ItemStatsUpdateWithoutReleaseInput.schema';
import { ItemStatsUncheckedUpdateWithoutReleaseInputObjectSchema } from './ItemStatsUncheckedUpdateWithoutReleaseInput.schema';
import { ItemStatsCreateWithoutReleaseInputObjectSchema } from './ItemStatsCreateWithoutReleaseInput.schema';
import { ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema } from './ItemStatsUncheckedCreateWithoutReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsUpsertWithWhereUniqueWithoutReleaseInput> =
  z
    .object({
      where: z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ItemStatsUpdateWithoutReleaseInputObjectSchema),
        z.lazy(() => ItemStatsUncheckedUpdateWithoutReleaseInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ItemStatsCreateWithoutReleaseInputObjectSchema),
        z.lazy(() => ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema),
      ]),
    })
    .strict();

export const ItemStatsUpsertWithWhereUniqueWithoutReleaseInputObjectSchema =
  Schema;
