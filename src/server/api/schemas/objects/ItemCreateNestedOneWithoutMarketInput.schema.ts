import { z } from 'zod';
import { ItemCreateWithoutMarketInputObjectSchema } from './ItemCreateWithoutMarketInput.schema';
import { ItemUncheckedCreateWithoutMarketInputObjectSchema } from './ItemUncheckedCreateWithoutMarketInput.schema';
import { ItemCreateOrConnectWithoutMarketInputObjectSchema } from './ItemCreateOrConnectWithoutMarketInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateNestedOneWithoutMarketInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemCreateWithoutMarketInputObjectSchema),
        z.lazy(() => ItemUncheckedCreateWithoutMarketInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ItemCreateOrConnectWithoutMarketInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ItemCreateNestedOneWithoutMarketInputObjectSchema = Schema;
