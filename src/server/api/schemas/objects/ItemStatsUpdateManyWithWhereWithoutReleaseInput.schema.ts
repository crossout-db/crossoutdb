import { z } from 'zod';
import { ItemStatsScalarWhereInputObjectSchema } from './ItemStatsScalarWhereInput.schema';
import { ItemStatsUpdateManyMutationInputObjectSchema } from './ItemStatsUpdateManyMutationInput.schema';
import { ItemStatsUncheckedUpdateManyWithoutItemStatsInputObjectSchema } from './ItemStatsUncheckedUpdateManyWithoutItemStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsUpdateManyWithWhereWithoutReleaseInput> =
  z
    .object({
      where: z.lazy(() => ItemStatsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ItemStatsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ItemStatsUncheckedUpdateManyWithoutItemStatsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ItemStatsUpdateManyWithWhereWithoutReleaseInputObjectSchema =
  Schema;
