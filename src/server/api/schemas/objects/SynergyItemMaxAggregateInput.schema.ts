import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemMaxAggregateInputType> = z
  .object({
    synergyId: z.literal(true).optional(),
    itemId: z.literal(true).optional(),
  })
  .strict();

export const SynergyItemMaxAggregateInputObjectSchema = Schema;
