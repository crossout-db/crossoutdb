import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutCategoryInputObjectSchema } from './ItemUpdateWithoutCategoryInput.schema';
import { ItemUncheckedUpdateWithoutCategoryInputObjectSchema } from './ItemUncheckedUpdateWithoutCategoryInput.schema';
import { ItemCreateWithoutCategoryInputObjectSchema } from './ItemCreateWithoutCategoryInput.schema';
import { ItemUncheckedCreateWithoutCategoryInputObjectSchema } from './ItemUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ItemUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => ItemUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ItemCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => ItemUncheckedCreateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const ItemUpsertWithWhereUniqueWithoutCategoryInputObjectSchema = Schema;
