import { z } from 'zod';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';
import { ItemStatsCreateWithoutReleaseInputObjectSchema } from './ItemStatsCreateWithoutReleaseInput.schema';
import { ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema } from './ItemStatsUncheckedCreateWithoutReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsCreateOrConnectWithoutReleaseInput> = z
  .object({
    where: z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemStatsCreateWithoutReleaseInputObjectSchema),
      z.lazy(() => ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema),
    ]),
  })
  .strict();

export const ItemStatsCreateOrConnectWithoutReleaseInputObjectSchema = Schema;
