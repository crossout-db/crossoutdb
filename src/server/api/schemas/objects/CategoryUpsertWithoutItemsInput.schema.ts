import { z } from 'zod';
import { CategoryUpdateWithoutItemsInputObjectSchema } from './CategoryUpdateWithoutItemsInput.schema';
import { CategoryUncheckedUpdateWithoutItemsInputObjectSchema } from './CategoryUncheckedUpdateWithoutItemsInput.schema';
import { CategoryCreateWithoutItemsInputObjectSchema } from './CategoryCreateWithoutItemsInput.schema';
import { CategoryUncheckedCreateWithoutItemsInputObjectSchema } from './CategoryUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpsertWithoutItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutItemsInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateWithoutItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutItemsInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryUpsertWithoutItemsInputObjectSchema = Schema;
