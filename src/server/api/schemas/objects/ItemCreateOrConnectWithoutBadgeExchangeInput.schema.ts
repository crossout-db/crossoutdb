import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutBadgeExchangeInputObjectSchema } from './ItemCreateWithoutBadgeExchangeInput.schema';
import { ItemUncheckedCreateWithoutBadgeExchangeInputObjectSchema } from './ItemUncheckedCreateWithoutBadgeExchangeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutBadgeExchangeInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutBadgeExchangeInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutBadgeExchangeInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutBadgeExchangeInputObjectSchema = Schema;
