import { z } from 'zod';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';
import { ItemStatsUpdateWithoutUserInputObjectSchema } from './ItemStatsUpdateWithoutUserInput.schema';
import { ItemStatsUncheckedUpdateWithoutUserInputObjectSchema } from './ItemStatsUncheckedUpdateWithoutUserInput.schema';
import { ItemStatsCreateWithoutUserInputObjectSchema } from './ItemStatsCreateWithoutUserInput.schema';
import { ItemStatsUncheckedCreateWithoutUserInputObjectSchema } from './ItemStatsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ItemStatsUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ItemStatsUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ItemStatsCreateWithoutUserInputObjectSchema),
        z.lazy(() => ItemStatsUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ItemStatsUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
