import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUncheckedCreateInput> = z
  .object({
    synergyId: z.number(),
    itemId: z.number(),
  })
  .strict();

export const SynergyItemUncheckedCreateInputObjectSchema = Schema;
