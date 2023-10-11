import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemUncheckedCreateWithoutItemInput> = z
  .object({
    id: z.number().optional(),
    packId: z.number(),
    quantity: z.number(),
  })
  .strict();

export const PackItemUncheckedCreateWithoutItemInputObjectSchema = Schema;
