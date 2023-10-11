import { z } from 'zod';
import { ItemUpdateWithoutPackItemsInputObjectSchema } from './ItemUpdateWithoutPackItemsInput.schema';
import { ItemUncheckedUpdateWithoutPackItemsInputObjectSchema } from './ItemUncheckedUpdateWithoutPackItemsInput.schema';
import { ItemCreateWithoutPackItemsInputObjectSchema } from './ItemCreateWithoutPackItemsInput.schema';
import { ItemUncheckedCreateWithoutPackItemsInputObjectSchema } from './ItemUncheckedCreateWithoutPackItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpsertWithoutPackItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ItemUpdateWithoutPackItemsInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutPackItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutPackItemsInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutPackItemsInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithoutPackItemsInputObjectSchema = Schema;
