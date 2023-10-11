import { z } from 'zod';
import { ItemCreateWithoutPackItemsInputObjectSchema } from './ItemCreateWithoutPackItemsInput.schema';
import { ItemUncheckedCreateWithoutPackItemsInputObjectSchema } from './ItemUncheckedCreateWithoutPackItemsInput.schema';
import { ItemCreateOrConnectWithoutPackItemsInputObjectSchema } from './ItemCreateOrConnectWithoutPackItemsInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateNestedOneWithoutPackItemsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemCreateWithoutPackItemsInputObjectSchema),
        z.lazy(() => ItemUncheckedCreateWithoutPackItemsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ItemCreateOrConnectWithoutPackItemsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ItemCreateNestedOneWithoutPackItemsInputObjectSchema = Schema;
