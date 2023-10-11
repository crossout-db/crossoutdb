import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    quantity: z.literal(true).optional(),
    typeId: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
    factionId: z.literal(true).optional(),
    rarityId: z.literal(true).optional(),
    level: z.literal(true).optional(),
    sellPriceMin: z.literal(true).optional(),
    sellOrders: z.literal(true).optional(),
    buyPriceMax: z.literal(true).optional(),
    buyOrders: z.literal(true).optional(),
    craftCost: z.literal(true).optional(),
    logId: z.literal(true).optional(),
  })
  .strict();

export const ItemSumAggregateInputObjectSchema = Schema;
