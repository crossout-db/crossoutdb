import { z } from 'zod';
import { ItemUpdateWithoutMarketInputObjectSchema } from './ItemUpdateWithoutMarketInput.schema';
import { ItemUncheckedUpdateWithoutMarketInputObjectSchema } from './ItemUncheckedUpdateWithoutMarketInput.schema';
import { ItemCreateWithoutMarketInputObjectSchema } from './ItemCreateWithoutMarketInput.schema';
import { ItemUncheckedCreateWithoutMarketInputObjectSchema } from './ItemUncheckedCreateWithoutMarketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpsertWithoutMarketInput> = z
  .object({
    update: z.union([
      z.lazy(() => ItemUpdateWithoutMarketInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutMarketInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutMarketInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutMarketInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithoutMarketInputObjectSchema = Schema;
