import { z } from 'zod';
import { ItemCreateWithoutItemSynergiesInputObjectSchema } from './ItemCreateWithoutItemSynergiesInput.schema';
import { ItemUncheckedCreateWithoutItemSynergiesInputObjectSchema } from './ItemUncheckedCreateWithoutItemSynergiesInput.schema';
import { ItemCreateOrConnectWithoutItemSynergiesInputObjectSchema } from './ItemCreateOrConnectWithoutItemSynergiesInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateNestedOneWithoutItemSynergiesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemCreateWithoutItemSynergiesInputObjectSchema),
        z.lazy(() => ItemUncheckedCreateWithoutItemSynergiesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ItemCreateOrConnectWithoutItemSynergiesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ItemCreateNestedOneWithoutItemSynergiesInputObjectSchema = Schema;
