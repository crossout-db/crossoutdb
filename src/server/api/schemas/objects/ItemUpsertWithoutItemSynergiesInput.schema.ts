import { z } from 'zod';
import { ItemUpdateWithoutItemSynergiesInputObjectSchema } from './ItemUpdateWithoutItemSynergiesInput.schema';
import { ItemUncheckedUpdateWithoutItemSynergiesInputObjectSchema } from './ItemUncheckedUpdateWithoutItemSynergiesInput.schema';
import { ItemCreateWithoutItemSynergiesInputObjectSchema } from './ItemCreateWithoutItemSynergiesInput.schema';
import { ItemUncheckedCreateWithoutItemSynergiesInputObjectSchema } from './ItemUncheckedCreateWithoutItemSynergiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpsertWithoutItemSynergiesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ItemUpdateWithoutItemSynergiesInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutItemSynergiesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutItemSynergiesInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutItemSynergiesInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithoutItemSynergiesInputObjectSchema = Schema;
