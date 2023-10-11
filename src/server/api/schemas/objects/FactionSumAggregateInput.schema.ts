import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FactionSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const FactionSumAggregateInputObjectSchema = Schema;
