import { z } from 'zod';
import { ItemCreateWithoutRecipeItemsInputObjectSchema } from './ItemCreateWithoutRecipeItemsInput.schema';
import { ItemUncheckedCreateWithoutRecipeItemsInputObjectSchema } from './ItemUncheckedCreateWithoutRecipeItemsInput.schema';
import { ItemCreateOrConnectWithoutRecipeItemsInputObjectSchema } from './ItemCreateOrConnectWithoutRecipeItemsInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateNestedOneWithoutRecipeItemsInput> = z
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
    connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ItemCreateNestedOneWithoutRecipeItemsInputObjectSchema = Schema;
