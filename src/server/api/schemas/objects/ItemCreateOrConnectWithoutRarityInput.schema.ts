import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutRarityInputObjectSchema } from './ItemCreateWithoutRarityInput.schema';
import { ItemUncheckedCreateWithoutRarityInputObjectSchema } from './ItemUncheckedCreateWithoutRarityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutRarityInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutRarityInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutRarityInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutRarityInputObjectSchema = Schema;
