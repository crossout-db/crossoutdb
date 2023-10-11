import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RarityCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    order: z.literal(true).optional(),
    primaryColor: z.literal(true).optional(),
    secondaryColor: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const RarityCountAggregateInputObjectSchema = Schema;
