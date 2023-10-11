import { z } from 'zod';
import { ItemCreateWithoutPackItemsInputObjectSchema } from './ItemCreateWithoutPackItemsInput.schema';
import { ItemUncheckedCreateWithoutPackItemsInputObjectSchema } from './ItemUncheckedCreateWithoutPackItemsInput.schema';
import { ItemCreateOrConnectWithoutPackItemsInputObjectSchema } from './ItemCreateOrConnectWithoutPackItemsInput.schema';
import { ItemUpsertWithoutPackItemsInputObjectSchema } from './ItemUpsertWithoutPackItemsInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutPackItemsInputObjectSchema } from './ItemUpdateWithoutPackItemsInput.schema';
import { ItemUncheckedUpdateWithoutPackItemsInputObjectSchema } from './ItemUncheckedUpdateWithoutPackItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateOneRequiredWithoutPackItemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemCreateWithoutPackItemsInputObjectSchema),
          z.lazy(() => ItemUncheckedCreateWithoutPackItemsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ItemCreateOrConnectWithoutPackItemsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ItemUpsertWithoutPackItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ItemUpdateWithoutPackItemsInputObjectSchema),
          z.lazy(() => ItemUncheckedUpdateWithoutPackItemsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemUpdateOneRequiredWithoutPackItemsNestedInputObjectSchema =
  Schema;
