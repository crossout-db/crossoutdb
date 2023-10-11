import { z } from 'zod';
import { BadgeExchangeWhereInputObjectSchema } from './BadgeExchangeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BadgeExchangeListRelationFilter> = z
  .object({
    every: z.lazy(() => BadgeExchangeWhereInputObjectSchema).optional(),
    some: z.lazy(() => BadgeExchangeWhereInputObjectSchema).optional(),
    none: z.lazy(() => BadgeExchangeWhereInputObjectSchema).optional(),
  })
  .strict();

export const BadgeExchangeListRelationFilterObjectSchema = Schema;
