import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutPackItemsInputObjectSchema } from './ItemCreateWithoutPackItemsInput.schema';
import { ItemUncheckedCreateWithoutPackItemsInputObjectSchema } from './ItemUncheckedCreateWithoutPackItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutPackItemsInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutPackItemsInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutPackItemsInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutPackItemsInputObjectSchema = Schema;
