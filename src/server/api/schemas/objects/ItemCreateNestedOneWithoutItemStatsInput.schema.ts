import { z } from 'zod';
import { ItemCreateWithoutItemStatsInputObjectSchema } from './ItemCreateWithoutItemStatsInput.schema';
import { ItemUncheckedCreateWithoutItemStatsInputObjectSchema } from './ItemUncheckedCreateWithoutItemStatsInput.schema';
import { ItemCreateOrConnectWithoutItemStatsInputObjectSchema } from './ItemCreateOrConnectWithoutItemStatsInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateNestedOneWithoutItemStatsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemCreateWithoutItemStatsInputObjectSchema),
        z.lazy(() => ItemUncheckedCreateWithoutItemStatsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ItemCreateOrConnectWithoutItemStatsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ItemCreateNestedOneWithoutItemStatsInputObjectSchema = Schema;
