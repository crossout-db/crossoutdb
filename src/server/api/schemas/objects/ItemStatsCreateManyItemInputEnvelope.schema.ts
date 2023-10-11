import { z } from 'zod';
import { ItemStatsCreateManyItemInputObjectSchema } from './ItemStatsCreateManyItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsCreateManyItemInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ItemStatsCreateManyItemInputObjectSchema),
      z.lazy(() => ItemStatsCreateManyItemInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ItemStatsCreateManyItemInputEnvelopeObjectSchema = Schema;
