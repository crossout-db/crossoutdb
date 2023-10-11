import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    recordId: z.literal(true).optional(),
  })
  .strict();

export const LogAvgAggregateInputObjectSchema = Schema;
