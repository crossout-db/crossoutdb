import { z } from 'zod';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';
import { ItemStatsCreateWithoutUserInputObjectSchema } from './ItemStatsCreateWithoutUserInput.schema';
import { ItemStatsUncheckedCreateWithoutUserInputObjectSchema } from './ItemStatsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemStatsCreateWithoutUserInputObjectSchema),
      z.lazy(() => ItemStatsUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ItemStatsCreateOrConnectWithoutUserInputObjectSchema = Schema;
