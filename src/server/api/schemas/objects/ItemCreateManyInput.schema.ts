import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    marketDef: z.string().optional().nullable(),
    quantity: z.number(),
    typeId: z.number(),
    categoryId: z.number(),
    factionId: z.number(),
    rarityId: z.number(),
    level: z.number(),
    sellPriceMin: z.number().optional().nullable(),
    sellOrders: z.number().optional().nullable(),
    buyPriceMax: z.number().optional().nullable(),
    buyOrders: z.number().optional().nullable(),
    craftCost: z.number().optional().nullable(),
    timestamp: z.coerce.date().optional().nullable(),
    active: z.boolean(),
    logId: z.number().optional().nullable(),
  })
  .strict();

export const ItemCreateManyInputObjectSchema = Schema;
