import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutRecipeItemsInputObjectSchema } from './ItemCreateWithoutRecipeItemsInput.schema';
import { ItemUncheckedCreateWithoutRecipeItemsInputObjectSchema } from './ItemUncheckedCreateWithoutRecipeItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutRecipeItemsInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutRecipeItemsInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutRecipeItemsInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutRecipeItemsInputObjectSchema = Schema;
