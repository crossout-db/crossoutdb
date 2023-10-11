import { z } from 'zod';
import { CategoryCreateWithoutItemsInputObjectSchema } from './CategoryCreateWithoutItemsInput.schema';
import { CategoryUncheckedCreateWithoutItemsInputObjectSchema } from './CategoryUncheckedCreateWithoutItemsInput.schema';
import { CategoryCreateOrConnectWithoutItemsInputObjectSchema } from './CategoryCreateOrConnectWithoutItemsInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutItemsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CategoryCreateWithoutItemsInputObjectSchema),
        z.lazy(() => CategoryUncheckedCreateWithoutItemsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CategoryCreateOrConnectWithoutItemsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CategoryCreateNestedOneWithoutItemsInputObjectSchema = Schema;
