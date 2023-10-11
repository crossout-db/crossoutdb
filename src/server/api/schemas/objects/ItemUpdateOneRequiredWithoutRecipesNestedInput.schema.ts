import { z } from 'zod';
import { ItemCreateWithoutRecipesInputObjectSchema } from './ItemCreateWithoutRecipesInput.schema';
import { ItemUncheckedCreateWithoutRecipesInputObjectSchema } from './ItemUncheckedCreateWithoutRecipesInput.schema';
import { ItemCreateOrConnectWithoutRecipesInputObjectSchema } from './ItemCreateOrConnectWithoutRecipesInput.schema';
import { ItemUpsertWithoutRecipesInputObjectSchema } from './ItemUpsertWithoutRecipesInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutRecipesInputObjectSchema } from './ItemUpdateWithoutRecipesInput.schema';
import { ItemUncheckedUpdateWithoutRecipesInputObjectSchema } from './ItemUncheckedUpdateWithoutRecipesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateOneRequiredWithoutRecipesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemCreateWithoutRecipesInputObjectSchema),
          z.lazy(() => ItemUncheckedCreateWithoutRecipesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ItemCreateOrConnectWithoutRecipesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ItemUpsertWithoutRecipesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ItemUpdateWithoutRecipesInputObjectSchema),
          z.lazy(() => ItemUncheckedUpdateWithoutRecipesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemUpdateOneRequiredWithoutRecipesNestedInputObjectSchema =
  Schema;
