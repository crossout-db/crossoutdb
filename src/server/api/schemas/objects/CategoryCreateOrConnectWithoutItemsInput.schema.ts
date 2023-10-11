import { z } from 'zod';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutItemsInputObjectSchema } from './CategoryCreateWithoutItemsInput.schema';
import { CategoryUncheckedCreateWithoutItemsInputObjectSchema } from './CategoryUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutItemsInput> = z
  .object({
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutItemsInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryCreateOrConnectWithoutItemsInputObjectSchema = Schema;
