import { z } from 'zod';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';
import { ItemStatsCreateWithoutItemInputObjectSchema } from './ItemStatsCreateWithoutItemInput.schema';
import { ItemStatsUncheckedCreateWithoutItemInputObjectSchema } from './ItemStatsUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsCreateOrConnectWithoutItemInput> = z
  .object({
    where: z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemStatsCreateWithoutItemInputObjectSchema),
      z.lazy(() => ItemStatsUncheckedCreateWithoutItemInputObjectSchema),
    ]),
  })
  .strict();

export const ItemStatsCreateOrConnectWithoutItemInputObjectSchema = Schema;
