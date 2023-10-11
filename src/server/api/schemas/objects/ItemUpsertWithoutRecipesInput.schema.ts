import { z } from 'zod';
import { ItemUpdateWithoutRecipesInputObjectSchema } from './ItemUpdateWithoutRecipesInput.schema';
import { ItemUncheckedUpdateWithoutRecipesInputObjectSchema } from './ItemUncheckedUpdateWithoutRecipesInput.schema';
import { ItemCreateWithoutRecipesInputObjectSchema } from './ItemCreateWithoutRecipesInput.schema';
import { ItemUncheckedCreateWithoutRecipesInputObjectSchema } from './ItemUncheckedCreateWithoutRecipesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpsertWithoutRecipesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ItemUpdateWithoutRecipesInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutRecipesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutRecipesInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutRecipesInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithoutRecipesInputObjectSchema = Schema;
