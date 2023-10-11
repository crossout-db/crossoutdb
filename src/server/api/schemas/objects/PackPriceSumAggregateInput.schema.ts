import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    packId: z.literal(true).optional(),
    priceUSD: z.literal(true).optional(),
    priceEUR: z.literal(true).optional(),
    priceGBP: z.literal(true).optional(),
    priceRUB: z.literal(true).optional(),
    discount: z.literal(true).optional(),
  })
  .strict();

export const PackPriceSumAggregateInputObjectSchema = Schema;
