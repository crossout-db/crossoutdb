import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutItemStatsInputObjectSchema } from './ItemCreateWithoutItemStatsInput.schema';
import { ItemUncheckedCreateWithoutItemStatsInputObjectSchema } from './ItemUncheckedCreateWithoutItemStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutItemStatsInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutItemStatsInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutItemStatsInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutItemStatsInputObjectSchema = Schema;
