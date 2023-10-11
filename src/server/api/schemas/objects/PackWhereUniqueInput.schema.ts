import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    steamAppID: z.number().optional(),
  })
  .strict();

export const PackWhereUniqueInputObjectSchema = Schema;
