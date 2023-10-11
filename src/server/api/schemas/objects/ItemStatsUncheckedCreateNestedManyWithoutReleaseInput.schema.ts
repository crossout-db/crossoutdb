import { z } from 'zod';
import { ItemStatsCreateWithoutReleaseInputObjectSchema } from './ItemStatsCreateWithoutReleaseInput.schema';
import { ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema } from './ItemStatsUncheckedCreateWithoutReleaseInput.schema';
import { ItemStatsCreateOrConnectWithoutReleaseInputObjectSchema } from './ItemStatsCreateOrConnectWithoutReleaseInput.schema';
import { ItemStatsCreateManyReleaseInputEnvelopeObjectSchema } from './ItemStatsCreateManyReleaseInputEnvelope.schema';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsUncheckedCreateNestedManyWithoutReleaseInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemStatsCreateWithoutReleaseInputObjectSchema),
          z.lazy(() => ItemStatsCreateWithoutReleaseInputObjectSchema).array(),
          z.lazy(() => ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema),
          z
            .lazy(() => ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemStatsCreateOrConnectWithoutReleaseInputObjectSchema),
          z
            .lazy(() => ItemStatsCreateOrConnectWithoutReleaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemStatsCreateManyReleaseInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
          z.lazy(() => ItemStatsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemStatsUncheckedCreateNestedManyWithoutReleaseInputObjectSchema =
  Schema;
