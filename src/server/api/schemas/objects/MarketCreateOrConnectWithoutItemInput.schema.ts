import { z } from 'zod';
import { MarketWhereUniqueInputObjectSchema } from './MarketWhereUniqueInput.schema';
import { MarketCreateWithoutItemInputObjectSchema } from './MarketCreateWithoutItemInput.schema';
import { MarketUncheckedCreateWithoutItemInputObjectSchema } from './MarketUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketCreateOrConnectWithoutItemInput> = z
  .object({
    where: z.lazy(() => MarketWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MarketCreateWithoutItemInputObjectSchema),
      z.lazy(() => MarketUncheckedCreateWithoutItemInputObjectSchema),
    ]),
  })
  .strict();

export const MarketCreateOrConnectWithoutItemInputObjectSchema = Schema;
