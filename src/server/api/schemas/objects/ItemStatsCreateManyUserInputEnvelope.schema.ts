import { z } from 'zod';
import { ItemStatsCreateManyUserInputObjectSchema } from './ItemStatsCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ItemStatsCreateManyUserInputObjectSchema),
      z.lazy(() => ItemStatsCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ItemStatsCreateManyUserInputEnvelopeObjectSchema = Schema;
