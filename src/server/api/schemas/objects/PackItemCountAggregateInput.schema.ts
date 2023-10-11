import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    packId: z.literal(true).optional(),
    itemId: z.literal(true).optional(),
    quantity: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PackItemCountAggregateInputObjectSchema = Schema;
