import { z } from 'zod';
import { ReleaseCreateWithoutItemStatsInputObjectSchema } from './ReleaseCreateWithoutItemStatsInput.schema';
import { ReleaseUncheckedCreateWithoutItemStatsInputObjectSchema } from './ReleaseUncheckedCreateWithoutItemStatsInput.schema';
import { ReleaseCreateOrConnectWithoutItemStatsInputObjectSchema } from './ReleaseCreateOrConnectWithoutItemStatsInput.schema';
import { ReleaseWhereUniqueInputObjectSchema } from './ReleaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseCreateNestedOneWithoutItemStatsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ReleaseCreateWithoutItemStatsInputObjectSchema),
        z.lazy(() => ReleaseUncheckedCreateWithoutItemStatsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ReleaseCreateOrConnectWithoutItemStatsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ReleaseWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ReleaseCreateNestedOneWithoutItemStatsInputObjectSchema = Schema;
