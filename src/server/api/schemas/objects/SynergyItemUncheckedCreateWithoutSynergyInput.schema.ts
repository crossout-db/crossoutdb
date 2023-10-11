import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUncheckedCreateWithoutSynergyInput> =
  z
    .object({
      itemId: z.number(),
    })
    .strict();

export const SynergyItemUncheckedCreateWithoutSynergyInputObjectSchema = Schema;
