import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceCreateManyPackInput> = z
  .object({
    id: z.number().optional(),
    timestamp: z.coerce.date().optional(),
    priceUSD: z.number(),
    priceEUR: z.number(),
    priceGBP: z.number(),
    priceRUB: z.number(),
    discount: z.number(),
  })
  .strict();

export const PackPriceCreateManyPackInputObjectSchema = Schema;
