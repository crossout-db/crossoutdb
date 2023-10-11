import { z } from 'zod';
import { ItemStatsWhereUniqueInputObjectSchema } from './ItemStatsWhereUniqueInput.schema';
import { ItemStatsUpdateWithoutUserInputObjectSchema } from './ItemStatsUpdateWithoutUserInput.schema';
import { ItemStatsUncheckedUpdateWithoutUserInputObjectSchema } from './ItemStatsUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ItemStatsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ItemStatsUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ItemStatsUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ItemStatsUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
