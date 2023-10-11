import { z } from 'zod';
import { ItemCreateWithoutRecipeItemsInputObjectSchema } from './ItemCreateWithoutRecipeItemsInput.schema';
import { ItemUncheckedCreateWithoutRecipeItemsInputObjectSchema } from './ItemUncheckedCreateWithoutRecipeItemsInput.schema';
import { ItemCreateOrConnectWithoutRecipeItemsInputObjectSchema } from './ItemCreateOrConnectWithoutRecipeItemsInput.schema';
import { ItemUpsertWithoutRecipeItemsInputObjectSchema } from './ItemUpsertWithoutRecipeItemsInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutRecipeItemsInputObjectSchema } from './ItemUpdateWithoutRecipeItemsInput.schema';
import { ItemUncheckedUpdateWithoutRecipeItemsInputObjectSchema } from './ItemUncheckedUpdateWithoutRecipeItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateOneRequiredWithoutRecipeItemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemCreateWithoutRecipeItemsInputObjectSchema),
          z.lazy(() => ItemUncheckedCreateWithoutRecipeItemsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ItemCreateOrConnectWithoutRecipeItemsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ItemUpsertWithoutRecipeItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ItemUpdateWithoutRecipeItemsInputObjectSchema),
          z.lazy(() => ItemUncheckedUpdateWithoutRecipeItemsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemUpdateOneRequiredWithoutRecipeItemsNestedInputObjectSchema =
  Schema;
