import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
    steamAppID: z.literal(true).optional(),
    key: z.literal(true).optional(),
    coins: z.literal(true).optional(),
    releaseId: z.literal(true).optional(),
    active: z.literal(true).optional(),
  })
  .strict();

export const PackMinAggregateInputObjectSchema = Schema;
