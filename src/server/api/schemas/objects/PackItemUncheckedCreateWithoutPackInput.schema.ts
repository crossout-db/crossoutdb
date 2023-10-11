import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemUncheckedCreateWithoutPackInput> = z
  .object({
    id: z.number().optional(),
    itemId: z.number(),
    quantity: z.number(),
  })
  .strict();

export const PackItemUncheckedCreateWithoutPackInputObjectSchema = Schema;
