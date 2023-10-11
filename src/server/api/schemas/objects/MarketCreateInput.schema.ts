import { z } from 'zod';
import { ItemCreateNestedOneWithoutMarketInputObjectSchema } from './ItemCreateNestedOneWithoutMarketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketCreateInput> = z
  .object({
    marketDef: z.string(),
    sellPriceMin: z.number(),
    sellOrders: z.number(),
    buyPriceMax: z.number(),
    buyOrders: z.number(),
    craftCost: z.number().optional().nullable(),
    timestamp: z.coerce.date().optional(),
    item: z.lazy(() => ItemCreateNestedOneWithoutMarketInputObjectSchema),
  })
  .strict();

export const MarketCreateInputObjectSchema = Schema;
