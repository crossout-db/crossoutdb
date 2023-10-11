import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemCreateManySynergyInput> = z
  .object({
    itemId: z.number(),
  })
  .strict();

export const SynergyItemCreateManySynergyInputObjectSchema = Schema;
