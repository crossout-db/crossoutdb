import { z } from 'zod';
import { CategoryCreateWithoutItemsInputObjectSchema } from './CategoryCreateWithoutItemsInput.schema';
import { CategoryUncheckedCreateWithoutItemsInputObjectSchema } from './CategoryUncheckedCreateWithoutItemsInput.schema';
import { CategoryCreateOrConnectWithoutItemsInputObjectSchema } from './CategoryCreateOrConnectWithoutItemsInput.schema';
import { CategoryUpsertWithoutItemsInputObjectSchema } from './CategoryUpsertWithoutItemsInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutItemsInputObjectSchema } from './CategoryUpdateWithoutItemsInput.schema';
import { CategoryUncheckedUpdateWithoutItemsInputObjectSchema } from './CategoryUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutItemsNestedInput> =
  z
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
      upsert: z
        .lazy(() => CategoryUpsertWithoutItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CategoryUpdateWithoutItemsInputObjectSchema),
          z.lazy(() => CategoryUncheckedUpdateWithoutItemsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const CategoryUpdateOneRequiredWithoutItemsNestedInputObjectSchema =
  Schema;
