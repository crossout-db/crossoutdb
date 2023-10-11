import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RaritySumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    order: z.literal(true).optional(),
  })
  .strict();

export const RaritySumAggregateInputObjectSchema = Schema;
