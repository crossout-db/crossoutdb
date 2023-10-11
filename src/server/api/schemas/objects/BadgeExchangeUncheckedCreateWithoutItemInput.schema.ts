import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BadgeExchangeUncheckedCreateWithoutItemInput> = z
  .object({
    id: z.number().optional(),
    quantity: z.number(),
    badges: z.number(),
    active: z.boolean(),
    timestamp: z.coerce.date().optional(),
  })
  .strict();

export const BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema = Schema;
