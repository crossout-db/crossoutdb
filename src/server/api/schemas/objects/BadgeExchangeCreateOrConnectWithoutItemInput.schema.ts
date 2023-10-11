import { z } from 'zod';
import { BadgeExchangeWhereUniqueInputObjectSchema } from './BadgeExchangeWhereUniqueInput.schema';
import { BadgeExchangeCreateWithoutItemInputObjectSchema } from './BadgeExchangeCreateWithoutItemInput.schema';
import { BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema } from './BadgeExchangeUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BadgeExchangeCreateOrConnectWithoutItemInput> = z
  .object({
    where: z.lazy(() => BadgeExchangeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BadgeExchangeCreateWithoutItemInputObjectSchema),
      z.lazy(() => BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema),
    ]),
  })
  .strict();

export const BadgeExchangeCreateOrConnectWithoutItemInputObjectSchema = Schema;
