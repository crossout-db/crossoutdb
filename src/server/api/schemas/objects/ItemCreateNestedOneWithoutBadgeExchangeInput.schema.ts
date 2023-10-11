import { z } from 'zod';
import { ItemCreateWithoutBadgeExchangeInputObjectSchema } from './ItemCreateWithoutBadgeExchangeInput.schema';
import { ItemUncheckedCreateWithoutBadgeExchangeInputObjectSchema } from './ItemUncheckedCreateWithoutBadgeExchangeInput.schema';
import { ItemCreateOrConnectWithoutBadgeExchangeInputObjectSchema } from './ItemCreateOrConnectWithoutBadgeExchangeInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateNestedOneWithoutBadgeExchangeInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemCreateWithoutBadgeExchangeInputObjectSchema),
        z.lazy(() => ItemUncheckedCreateWithoutBadgeExchangeInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ItemCreateOrConnectWithoutBadgeExchangeInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ItemCreateNestedOneWithoutBadgeExchangeInputObjectSchema = Schema;
