import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutMarketInputObjectSchema } from './ItemCreateWithoutMarketInput.schema';
import { ItemUncheckedCreateWithoutMarketInputObjectSchema } from './ItemUncheckedCreateWithoutMarketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutMarketInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutMarketInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutMarketInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutMarketInputObjectSchema = Schema;
