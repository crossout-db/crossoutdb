import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    steamAppID: z.literal(true).optional(),
    coins: z.literal(true).optional(),
    releaseId: z.literal(true).optional(),
  })
  .strict();

export const PackSumAggregateInputObjectSchema = Schema;
