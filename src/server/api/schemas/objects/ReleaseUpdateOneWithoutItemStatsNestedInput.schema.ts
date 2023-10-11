import { z } from 'zod';
import { ReleaseCreateWithoutItemStatsInputObjectSchema } from './ReleaseCreateWithoutItemStatsInput.schema';
import { ReleaseUncheckedCreateWithoutItemStatsInputObjectSchema } from './ReleaseUncheckedCreateWithoutItemStatsInput.schema';
import { ReleaseCreateOrConnectWithoutItemStatsInputObjectSchema } from './ReleaseCreateOrConnectWithoutItemStatsInput.schema';
import { ReleaseUpsertWithoutItemStatsInputObjectSchema } from './ReleaseUpsertWithoutItemStatsInput.schema';
import { ReleaseWhereUniqueInputObjectSchema } from './ReleaseWhereUniqueInput.schema';
import { ReleaseUpdateWithoutItemStatsInputObjectSchema } from './ReleaseUpdateWithoutItemStatsInput.schema';
import { ReleaseUncheckedUpdateWithoutItemStatsInputObjectSchema } from './ReleaseUncheckedUpdateWithoutItemStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseUpdateOneWithoutItemStatsNestedInput> = z
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
    upsert: z
      .lazy(() => ReleaseUpsertWithoutItemStatsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ReleaseWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ReleaseUpdateWithoutItemStatsInputObjectSchema),
        z.lazy(() => ReleaseUncheckedUpdateWithoutItemStatsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ReleaseUpdateOneWithoutItemStatsNestedInputObjectSchema = Schema;
