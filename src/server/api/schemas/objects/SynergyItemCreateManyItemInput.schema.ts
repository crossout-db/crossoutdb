import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemCreateManyItemInput> = z
  .object({
    synergyId: z.number(),
  })
  .strict();

export const SynergyItemCreateManyItemInputObjectSchema = Schema;
