import { z } from 'zod';
import { ItemStatsCreateWithoutItemInputObjectSchema } from './ItemStatsCreateWithoutItemInput.schema';
import { ItemStatsUncheckedCreateWithoutItemInputObjectSchema } from './ItemStatsUncheckedCreateWithoutItemInput.schema';
import { ItemStatsCreateOrConnectWithoutItemInputObjectSchema } from './ItemStatsCreateOrConnectWithoutItemInput.schema';
import { ItemStatsCreateManyItemInputEnvelopeObjectSchema } from './ItemStatsCreateManyItemInputEnvelope.schema';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsCreateNestedManyWithoutItemInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemStatsCreateWithoutItemInputObjectSchema),
        z.lazy(() => ItemStatsCreateWithoutItemInputObjectSchema).array(),
        z.lazy(() => ItemStatsUncheckedCreateWithoutItemInputObjectSchema),
        z
          .lazy(() => ItemStatsUncheckedCreateWithoutItemInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ItemStatsCreateOrConnectWithoutItemInputObjectSchema),
        z
          .lazy(() => ItemStatsCreateOrConnectWithoutItemInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ItemStatsCreateManyItemInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
        z.lazy(() => ItemStatsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ItemStatsCreateNestedManyWithoutItemInputObjectSchema = Schema;
