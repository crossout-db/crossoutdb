import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackCreateManyReleaseInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    steamAppID: z.number(),
    key: z.string().optional().nullable(),
    coins: z.number(),
    active: z.boolean(),
  })
  .strict();

export const PackCreateManyReleaseInputObjectSchema = Schema;
