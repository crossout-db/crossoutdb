import { z } from 'zod';
import { ItemStatsCreateWithoutUserInputObjectSchema } from './ItemStatsCreateWithoutUserInput.schema';
import { ItemStatsUncheckedCreateWithoutUserInputObjectSchema } from './ItemStatsUncheckedCreateWithoutUserInput.schema';
import { ItemStatsCreateOrConnectWithoutUserInputObjectSchema } from './ItemStatsCreateOrConnectWithoutUserInput.schema';
import { ItemStatsCreateManyUserInputEnvelopeObjectSchema } from './ItemStatsCreateManyUserInputEnvelope.schema';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemStatsCreateWithoutUserInputObjectSchema),
          z.lazy(() => ItemStatsCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ItemStatsUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ItemStatsUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemStatsCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => ItemStatsCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemStatsCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
          z.lazy(() => ItemStatsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemStatsUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
