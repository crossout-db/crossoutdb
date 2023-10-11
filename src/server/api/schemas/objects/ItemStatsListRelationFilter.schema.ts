import { z } from 'zod';
import { ItemStatsWhereInputObjectSchema } from './ItemStatsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsListRelationFilter> = z
  .object({
    every: z.lazy(() => ItemStatsWhereInputObjectSchema).optional(),
    some: z.lazy(() => ItemStatsWhereInputObjectSchema).optional(),
    none: z.lazy(() => ItemStatsWhereInputObjectSchema).optional(),
  })
  .strict();

export const ItemStatsListRelationFilterObjectSchema = Schema;
