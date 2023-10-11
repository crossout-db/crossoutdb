import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BadgeExchangeUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    itemId: z.number(),
    quantity: z.number(),
    badges: z.number(),
    active: z.boolean(),
    timestamp: z.coerce.date().optional(),
  })
  .strict();

export const BadgeExchangeUncheckedCreateInputObjectSchema = Schema;
