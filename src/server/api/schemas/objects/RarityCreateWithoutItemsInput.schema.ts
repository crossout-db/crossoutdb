import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RarityCreateWithoutItemsInput> = z
  .object({
    name: z.string(),
    order: z.number(),
    primaryColor: z.string(),
    secondaryColor: z.string(),
  })
  .strict();

export const RarityCreateWithoutItemsInputObjectSchema = Schema;
