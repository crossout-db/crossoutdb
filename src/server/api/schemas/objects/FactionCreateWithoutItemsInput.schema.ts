import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FactionCreateWithoutItemsInput> = z
  .object({
    name: z.string(),
  })
  .strict();

export const FactionCreateWithoutItemsInputObjectSchema = Schema;
