import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PackOrderByWithRelationInputObjectSchema } from './PackOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    packId: z.lazy(() => SortOrderSchema).optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    priceUSD: z.lazy(() => SortOrderSchema).optional(),
    priceEUR: z.lazy(() => SortOrderSchema).optional(),
    priceGBP: z.lazy(() => SortOrderSchema).optional(),
    priceRUB: z.lazy(() => SortOrderSchema).optional(),
    discount: z.lazy(() => SortOrderSchema).optional(),
    pack: z.lazy(() => PackOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const PackPriceOrderByWithRelationInputObjectSchema = Schema;
