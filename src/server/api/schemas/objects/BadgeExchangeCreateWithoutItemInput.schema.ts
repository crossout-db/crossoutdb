import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BadgeExchangeCreateWithoutItemInput> = z
  .object({
    quantity: z.number(),
    badges: z.number(),
    active: z.boolean(),
    timestamp: z.coerce.date().optional(),
  })
  .strict();

export const BadgeExchangeCreateWithoutItemInputObjectSchema = Schema;
