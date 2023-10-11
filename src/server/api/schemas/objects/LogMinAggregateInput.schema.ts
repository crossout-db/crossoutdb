import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    timestamp: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    tableChanged: z.literal(true).optional(),
    recordId: z.literal(true).optional(),
  })
  .strict();

export const LogMinAggregateInputObjectSchema = Schema;
