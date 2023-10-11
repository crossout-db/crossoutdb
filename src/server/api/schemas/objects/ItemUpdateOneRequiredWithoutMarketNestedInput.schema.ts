import { z } from 'zod';
import { ItemCreateWithoutMarketInputObjectSchema } from './ItemCreateWithoutMarketInput.schema';
import { ItemUncheckedCreateWithoutMarketInputObjectSchema } from './ItemUncheckedCreateWithoutMarketInput.schema';
import { ItemCreateOrConnectWithoutMarketInputObjectSchema } from './ItemCreateOrConnectWithoutMarketInput.schema';
import { ItemUpsertWithoutMarketInputObjectSchema } from './ItemUpsertWithoutMarketInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutMarketInputObjectSchema } from './ItemUpdateWithoutMarketInput.schema';
import { ItemUncheckedUpdateWithoutMarketInputObjectSchema } from './ItemUncheckedUpdateWithoutMarketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateOneRequiredWithoutMarketNestedInput> =
  z
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
      upsert: z.lazy(() => ItemUpsertWithoutMarketInputObjectSchema).optional(),
      connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ItemUpdateWithoutMarketInputObjectSchema),
          z.lazy(() => ItemUncheckedUpdateWithoutMarketInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemUpdateOneRequiredWithoutMarketNestedInputObjectSchema = Schema;
