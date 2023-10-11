import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutRecipesInputObjectSchema } from './ItemCreateWithoutRecipesInput.schema';
import { ItemUncheckedCreateWithoutRecipesInputObjectSchema } from './ItemUncheckedCreateWithoutRecipesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutRecipesInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutRecipesInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutRecipesInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutRecipesInputObjectSchema = Schema;
