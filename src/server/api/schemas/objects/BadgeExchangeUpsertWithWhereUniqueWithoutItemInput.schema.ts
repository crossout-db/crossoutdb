import { z } from 'zod';
import { BadgeExchangeWhereUniqueInputObjectSchema } from './BadgeExchangeWhereUniqueInput.schema';
import { BadgeExchangeUpdateWithoutItemInputObjectSchema } from './BadgeExchangeUpdateWithoutItemInput.schema';
import { BadgeExchangeUncheckedUpdateWithoutItemInputObjectSchema } from './BadgeExchangeUncheckedUpdateWithoutItemInput.schema';
import { BadgeExchangeCreateWithoutItemInputObjectSchema } from './BadgeExchangeCreateWithoutItemInput.schema';
import { BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema } from './BadgeExchangeUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BadgeExchangeUpsertWithWhereUniqueWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => BadgeExchangeWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BadgeExchangeUpdateWithoutItemInputObjectSchema),
        z.lazy(() => BadgeExchangeUncheckedUpdateWithoutItemInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BadgeExchangeCreateWithoutItemInputObjectSchema),
        z.lazy(() => BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema),
      ]),
    })
    .strict();

export const BadgeExchangeUpsertWithWhereUniqueWithoutItemInputObjectSchema =
  Schema;
