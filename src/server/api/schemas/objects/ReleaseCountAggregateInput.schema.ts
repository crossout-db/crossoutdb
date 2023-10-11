import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    xoVersion: z.literal(true).optional(),
    build: z.literal(true).optional(),
    description: z.literal(true).optional(),
    battlePass: z.literal(true).optional(),
    url: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    active: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ReleaseCountAggregateInputObjectSchema = Schema;
