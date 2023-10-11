import { z } from 'zod';
import { ItemStatsCreateManyReleaseInputObjectSchema } from './ItemStatsCreateManyReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemStatsCreateManyReleaseInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ItemStatsCreateManyReleaseInputObjectSchema),
      z.lazy(() => ItemStatsCreateManyReleaseInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ItemStatsCreateManyReleaseInputEnvelopeObjectSchema = Schema;
