import { z } from 'zod';
import { ItemCreateWithoutCategoryInputObjectSchema } from './ItemCreateWithoutCategoryInput.schema';
import { ItemUncheckedCreateWithoutCategoryInputObjectSchema } from './ItemUncheckedCreateWithoutCategoryInput.schema';
import { ItemCreateOrConnectWithoutCategoryInputObjectSchema } from './ItemCreateOrConnectWithoutCategoryInput.schema';
import { ItemUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './ItemUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { ItemCreateManyCategoryInputEnvelopeObjectSchema } from './ItemCreateManyCategoryInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './ItemUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { ItemUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './ItemUpdateManyWithWhereWithoutCategoryInput.schema';
import { ItemScalarWhereInputObjectSchema } from './ItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateManyWithoutCategoryNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => ItemUpsertWithWhereUniqueWithoutCategoryInputObjectSchema),
        z
          .lazy(() => ItemUpsertWithWhereUniqueWithoutCategoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ItemCreateManyCategoryInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ItemUpdateWithWhereUniqueWithoutCategoryInputObjectSchema),
        z
          .lazy(() => ItemUpdateWithWhereUniqueWithoutCategoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ItemUpdateManyWithWhereWithoutCategoryInputObjectSchema),
        z
          .lazy(() => ItemUpdateManyWithWhereWithoutCategoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ItemScalarWhereInputObjectSchema),
        z.lazy(() => ItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ItemUpdateManyWithoutCategoryNestedInputObjectSchema = Schema;
