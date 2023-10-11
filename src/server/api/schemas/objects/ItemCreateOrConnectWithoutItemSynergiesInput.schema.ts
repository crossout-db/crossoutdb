import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutItemSynergiesInputObjectSchema } from './ItemCreateWithoutItemSynergiesInput.schema';
import { ItemUncheckedCreateWithoutItemSynergiesInputObjectSchema } from './ItemUncheckedCreateWithoutItemSynergiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutItemSynergiesInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutItemSynergiesInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutItemSynergiesInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutItemSynergiesInputObjectSchema = Schema;
