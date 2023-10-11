import { z } from 'zod';
import { ItemCreateNestedOneWithoutBadgeExchangeInputObjectSchema } from './ItemCreateNestedOneWithoutBadgeExchangeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BadgeExchangeCreateInput> = z
  .object({
    quantity: z.number(),
    badges: z.number(),
    active: z.boolean(),
    timestamp: z.coerce.date().optional(),
    item: z.lazy(
      () => ItemCreateNestedOneWithoutBadgeExchangeInputObjectSchema,
    ),
  })
  .strict();

export const BadgeExchangeCreateInputObjectSchema = Schema;
