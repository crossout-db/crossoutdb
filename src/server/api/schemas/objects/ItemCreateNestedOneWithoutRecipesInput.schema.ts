import { z } from 'zod';
import { ItemCreateWithoutRecipesInputObjectSchema } from './ItemCreateWithoutRecipesInput.schema';
import { ItemUncheckedCreateWithoutRecipesInputObjectSchema } from './ItemUncheckedCreateWithoutRecipesInput.schema';
import { ItemCreateOrConnectWithoutRecipesInputObjectSchema } from './ItemCreateOrConnectWithoutRecipesInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateNestedOneWithoutRecipesInput> = z
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
    connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ItemCreateNestedOneWithoutRecipesInputObjectSchema = Schema;
