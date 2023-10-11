import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceCreateWithoutPackInput> = z
  .object({
    timestamp: z.coerce.date().optional(),
    priceUSD: z.number(),
    priceEUR: z.number(),
    priceGBP: z.number(),
    priceRUB: z.number(),
    discount: z.number(),
  })
  .strict();

export const PackPriceCreateWithoutPackInputObjectSchema = Schema;
