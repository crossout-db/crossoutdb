import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    itemId: z.literal(true).optional(),
    marketDef: z.literal(true).optional(),
    sellPriceMin: z.literal(true).optional(),
    sellOrders: z.literal(true).optional(),
    buyPriceMax: z.literal(true).optional(),
    buyOrders: z.literal(true).optional(),
    craftCost: z.literal(true).optional(),
    timestamp: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const MarketCountAggregateInputObjectSchema = Schema;
