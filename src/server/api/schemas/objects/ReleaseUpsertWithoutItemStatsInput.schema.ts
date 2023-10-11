import { z } from 'zod';
import { ReleaseUpdateWithoutItemStatsInputObjectSchema } from './ReleaseUpdateWithoutItemStatsInput.schema';
import { ReleaseUncheckedUpdateWithoutItemStatsInputObjectSchema } from './ReleaseUncheckedUpdateWithoutItemStatsInput.schema';
import { ReleaseCreateWithoutItemStatsInputObjectSchema } from './ReleaseCreateWithoutItemStatsInput.schema';
import { ReleaseUncheckedCreateWithoutItemStatsInputObjectSchema } from './ReleaseUncheckedCreateWithoutItemStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseUpsertWithoutItemStatsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ReleaseUpdateWithoutItemStatsInputObjectSchema),
      z.lazy(() => ReleaseUncheckedUpdateWithoutItemStatsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ReleaseCreateWithoutItemStatsInputObjectSchema),
      z.lazy(() => ReleaseUncheckedCreateWithoutItemStatsInputObjectSchema),
    ]),
  })
  .strict();

export const ReleaseUpsertWithoutItemStatsInputObjectSchema = Schema;
