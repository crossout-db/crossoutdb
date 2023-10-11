import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RarityUncheckedCreateWithoutItemsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    order: z.number(),
    primaryColor: z.string(),
    secondaryColor: z.string(),
  })
  .strict();

export const RarityUncheckedCreateWithoutItemsInputObjectSchema = Schema;
