import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketCreateManyItemInput> = z
  .object({
    id: z.number().optional(),
    marketDef: z.string(),
    sellPriceMin: z.number(),
    sellOrders: z.number(),
    buyPriceMax: z.number(),
    buyOrders: z.number(),
    craftCost: z.number().optional().nullable(),
    timestamp: z.coerce.date().optional(),
  })
  .strict();

export const MarketCreateManyItemInputObjectSchema = Schema;
