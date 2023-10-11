import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutCategoryInputObjectSchema } from './ItemCreateWithoutCategoryInput.schema';
import { ItemUncheckedCreateWithoutCategoryInputObjectSchema } from './ItemUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutCategoryInputObjectSchema = Schema;
