import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutCategoryInputObjectSchema } from './ItemUpdateWithoutCategoryInput.schema';
import { ItemUncheckedUpdateWithoutCategoryInputObjectSchema } from './ItemUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ItemUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => ItemUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const ItemUpdateWithWhereUniqueWithoutCategoryInputObjectSchema = Schema;
