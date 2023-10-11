import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutRarityInputObjectSchema } from './ItemUpdateWithoutRarityInput.schema';
import { ItemUncheckedUpdateWithoutRarityInputObjectSchema } from './ItemUncheckedUpdateWithoutRarityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateWithWhereUniqueWithoutRarityInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ItemUpdateWithoutRarityInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutRarityInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpdateWithWhereUniqueWithoutRarityInputObjectSchema = Schema;
