import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutRarityInputObjectSchema } from './ItemUpdateWithoutRarityInput.schema';
import { ItemUncheckedUpdateWithoutRarityInputObjectSchema } from './ItemUncheckedUpdateWithoutRarityInput.schema';
import { ItemCreateWithoutRarityInputObjectSchema } from './ItemCreateWithoutRarityInput.schema';
import { ItemUncheckedCreateWithoutRarityInputObjectSchema } from './ItemUncheckedCreateWithoutRarityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpsertWithWhereUniqueWithoutRarityInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ItemUpdateWithoutRarityInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutRarityInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutRarityInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutRarityInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithWhereUniqueWithoutRarityInputObjectSchema = Schema;
