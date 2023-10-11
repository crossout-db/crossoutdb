import { z } from 'zod';
import { MarketWhereUniqueInputObjectSchema } from './MarketWhereUniqueInput.schema';
import { MarketUpdateWithoutItemInputObjectSchema } from './MarketUpdateWithoutItemInput.schema';
import { MarketUncheckedUpdateWithoutItemInputObjectSchema } from './MarketUncheckedUpdateWithoutItemInput.schema';
import { MarketCreateWithoutItemInputObjectSchema } from './MarketCreateWithoutItemInput.schema';
import { MarketUncheckedCreateWithoutItemInputObjectSchema } from './MarketUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUpsertWithWhereUniqueWithoutItemInput> = z
  .object({
    where: z.lazy(() => MarketWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => MarketUpdateWithoutItemInputObjectSchema),
      z.lazy(() => MarketUncheckedUpdateWithoutItemInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MarketCreateWithoutItemInputObjectSchema),
      z.lazy(() => MarketUncheckedCreateWithoutItemInputObjectSchema),
    ]),
  })
  .strict();

export const MarketUpsertWithWhereUniqueWithoutItemInputObjectSchema = Schema;
