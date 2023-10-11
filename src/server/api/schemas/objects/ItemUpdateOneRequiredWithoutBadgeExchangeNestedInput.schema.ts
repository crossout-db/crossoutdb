import { z } from 'zod';
import { ItemCreateWithoutBadgeExchangeInputObjectSchema } from './ItemCreateWithoutBadgeExchangeInput.schema';
import { ItemUncheckedCreateWithoutBadgeExchangeInputObjectSchema } from './ItemUncheckedCreateWithoutBadgeExchangeInput.schema';
import { ItemCreateOrConnectWithoutBadgeExchangeInputObjectSchema } from './ItemCreateOrConnectWithoutBadgeExchangeInput.schema';
import { ItemUpsertWithoutBadgeExchangeInputObjectSchema } from './ItemUpsertWithoutBadgeExchangeInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutBadgeExchangeInputObjectSchema } from './ItemUpdateWithoutBadgeExchangeInput.schema';
import { ItemUncheckedUpdateWithoutBadgeExchangeInputObjectSchema } from './ItemUncheckedUpdateWithoutBadgeExchangeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateOneRequiredWithoutBadgeExchangeNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemCreateWithoutBadgeExchangeInputObjectSchema),
          z.lazy(
            () => ItemUncheckedCreateWithoutBadgeExchangeInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ItemCreateOrConnectWithoutBadgeExchangeInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ItemUpsertWithoutBadgeExchangeInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ItemUpdateWithoutBadgeExchangeInputObjectSchema),
          z.lazy(
            () => ItemUncheckedUpdateWithoutBadgeExchangeInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ItemUpdateOneRequiredWithoutBadgeExchangeNestedInputObjectSchema =
  Schema;
