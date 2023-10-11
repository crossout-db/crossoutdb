import { z } from 'zod';
import { ReleaseWhereUniqueInputObjectSchema } from './ReleaseWhereUniqueInput.schema';
import { ReleaseCreateWithoutItemStatsInputObjectSchema } from './ReleaseCreateWithoutItemStatsInput.schema';
import { ReleaseUncheckedCreateWithoutItemStatsInputObjectSchema } from './ReleaseUncheckedCreateWithoutItemStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseCreateOrConnectWithoutItemStatsInput> = z
  .object({
    where: z.lazy(() => ReleaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReleaseCreateWithoutItemStatsInputObjectSchema),
      z.lazy(() => ReleaseUncheckedCreateWithoutItemStatsInputObjectSchema),
    ]),
  })
  .strict();

export const ReleaseCreateOrConnectWithoutItemStatsInputObjectSchema = Schema;
