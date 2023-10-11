import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    marketDef: z.lazy(() => SortOrderSchema).optional(),
    sellPriceMin: z.lazy(() => SortOrderSchema).optional(),
    sellOrders: z.lazy(() => SortOrderSchema).optional(),
    buyPriceMax: z.lazy(() => SortOrderSchema).optional(),
    buyOrders: z.lazy(() => SortOrderSchema).optional(),
    craftCost: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const MarketOrderByWithRelationInputObjectSchema = Schema;
