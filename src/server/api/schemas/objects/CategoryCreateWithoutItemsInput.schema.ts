import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateWithoutItemsInput> = z
  .object({
    name: z.string(),
  })
  .strict();

export const CategoryCreateWithoutItemsInputObjectSchema = Schema;
