import { z } from 'zod';
import { ItemUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ItemUncheckedCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    items: z
      .lazy(() => ItemUncheckedCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryUncheckedCreateInputObjectSchema = Schema;
