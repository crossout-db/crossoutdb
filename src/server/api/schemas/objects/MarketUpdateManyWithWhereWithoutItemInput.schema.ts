import { z } from 'zod';
import { MarketScalarWhereInputObjectSchema } from './MarketScalarWhereInput.schema';
import { MarketUpdateManyMutationInputObjectSchema } from './MarketUpdateManyMutationInput.schema';
import { MarketUncheckedUpdateManyWithoutMarketInputObjectSchema } from './MarketUncheckedUpdateManyWithoutMarketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUpdateManyWithWhereWithoutItemInput> = z
  .object({
    where: z.lazy(() => MarketScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => MarketUpdateManyMutationInputObjectSchema),
      z.lazy(() => MarketUncheckedUpdateManyWithoutMarketInputObjectSchema),
    ]),
  })
  .strict();

export const MarketUpdateManyWithWhereWithoutItemInputObjectSchema = Schema;
