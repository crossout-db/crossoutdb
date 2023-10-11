import { z } from 'zod';
import { ItemUpdateWithoutRecipeItemsInputObjectSchema } from './ItemUpdateWithoutRecipeItemsInput.schema';
import { ItemUncheckedUpdateWithoutRecipeItemsInputObjectSchema } from './ItemUncheckedUpdateWithoutRecipeItemsInput.schema';
import { ItemCreateWithoutRecipeItemsInputObjectSchema } from './ItemCreateWithoutRecipeItemsInput.schema';
import { ItemUncheckedCreateWithoutRecipeItemsInputObjectSchema } from './ItemUncheckedCreateWithoutRecipeItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpsertWithoutRecipeItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ItemUpdateWithoutRecipeItemsInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutRecipeItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutRecipeItemsInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutRecipeItemsInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithoutRecipeItemsInputObjectSchema = Schema;
