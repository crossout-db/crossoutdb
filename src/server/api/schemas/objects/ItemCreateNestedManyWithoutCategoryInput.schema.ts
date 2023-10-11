import { z } from 'zod';
import { ItemCreateWithoutCategoryInputObjectSchema } from './ItemCreateWithoutCategoryInput.schema';
import { ItemUncheckedCreateWithoutCategoryInputObjectSchema } from './ItemUncheckedCreateWithoutCategoryInput.schema';
import { ItemCreateOrConnectWithoutCategoryInputObjectSchema } from './ItemCreateOrConnectWithoutCategoryInput.schema';
import { ItemCreateManyCategoryInputEnvelopeObjectSchema } from './ItemCreateManyCategoryInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateNestedManyWithoutCategoryInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => ItemCreateWithoutCategoryInputObjectSchema).array(),
        z.lazy(() => ItemUncheckedCreateWithoutCategoryInputObjectSchema),
        z
          .lazy(() => ItemUncheckedCreateWithoutCategoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ItemCreateOrConnectWithoutCategoryInputObjectSchema),
        z
          .lazy(() => ItemCreateOrConnectWithoutCategoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ItemCreateManyCategoryInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ItemCreateNestedManyWithoutCategoryInputObjectSchema = Schema;
