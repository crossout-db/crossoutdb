import { z } from 'zod';
import { MarketWhereUniqueInputObjectSchema } from './MarketWhereUniqueInput.schema';
import { MarketUpdateWithoutItemInputObjectSchema } from './MarketUpdateWithoutItemInput.schema';
import { MarketUncheckedUpdateWithoutItemInputObjectSchema } from './MarketUncheckedUpdateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUpdateWithWhereUniqueWithoutItemInput> = z
  .object({
    where: z.lazy(() => MarketWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => MarketUpdateWithoutItemInputObjectSchema),
      z.lazy(() => MarketUncheckedUpdateWithoutItemInputObjectSchema),
    ]),
  })
  .strict();

export const MarketUpdateWithWhereUniqueWithoutItemInputObjectSchema = Schema;
