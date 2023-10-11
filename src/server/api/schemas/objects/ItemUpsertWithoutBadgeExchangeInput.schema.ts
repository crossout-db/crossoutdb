import { z } from 'zod';
import { ItemUpdateWithoutBadgeExchangeInputObjectSchema } from './ItemUpdateWithoutBadgeExchangeInput.schema';
import { ItemUncheckedUpdateWithoutBadgeExchangeInputObjectSchema } from './ItemUncheckedUpdateWithoutBadgeExchangeInput.schema';
import { ItemCreateWithoutBadgeExchangeInputObjectSchema } from './ItemCreateWithoutBadgeExchangeInput.schema';
import { ItemUncheckedCreateWithoutBadgeExchangeInputObjectSchema } from './ItemUncheckedCreateWithoutBadgeExchangeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpsertWithoutBadgeExchangeInput> = z
  .object({
    update: z.union([
      z.lazy(() => ItemUpdateWithoutBadgeExchangeInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutBadgeExchangeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutBadgeExchangeInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutBadgeExchangeInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithoutBadgeExchangeInputObjectSchema = Schema;
