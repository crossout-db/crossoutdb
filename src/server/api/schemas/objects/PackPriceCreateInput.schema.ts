import { z } from 'zod';
import { PackCreateNestedOneWithoutPackPricesInputObjectSchema } from './PackCreateNestedOneWithoutPackPricesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceCreateInput> = z
  .object({
    timestamp: z.coerce.date().optional(),
    priceUSD: z.number(),
    priceEUR: z.number(),
    priceGBP: z.number(),
    priceRUB: z.number(),
    discount: z.number(),
    pack: z.lazy(() => PackCreateNestedOneWithoutPackPricesInputObjectSchema),
  })
  .strict();

export const PackPriceCreateInputObjectSchema = Schema;
