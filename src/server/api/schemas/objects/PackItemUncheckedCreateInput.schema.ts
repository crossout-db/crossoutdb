import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    packId: z.number(),
    itemId: z.number(),
    quantity: z.number(),
  })
  .strict();

export const PackItemUncheckedCreateInputObjectSchema = Schema;
