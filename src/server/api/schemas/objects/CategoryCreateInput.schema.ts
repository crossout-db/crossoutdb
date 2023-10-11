import { z } from 'zod';
import { ItemCreateNestedManyWithoutCategoryInputObjectSchema } from './ItemCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateInput> = z
  .object({
    name: z.string(),
    items: z
      .lazy(() => ItemCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryCreateInputObjectSchema = Schema;
