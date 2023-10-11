import { z } from 'zod';
import { BadgeExchangeWhereUniqueInputObjectSchema } from './BadgeExchangeWhereUniqueInput.schema';
import { BadgeExchangeUpdateWithoutItemInputObjectSchema } from './BadgeExchangeUpdateWithoutItemInput.schema';
import { BadgeExchangeUncheckedUpdateWithoutItemInputObjectSchema } from './BadgeExchangeUncheckedUpdateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BadgeExchangeUpdateWithWhereUniqueWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => BadgeExchangeWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BadgeExchangeUpdateWithoutItemInputObjectSchema),
        z.lazy(() => BadgeExchangeUncheckedUpdateWithoutItemInputObjectSchema),
      ]),
    })
    .strict();

export const BadgeExchangeUpdateWithWhereUniqueWithoutItemInputObjectSchema =
  Schema;
