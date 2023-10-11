import { z } from 'zod';
import { ItemCreateWithoutItemSynergiesInputObjectSchema } from './ItemCreateWithoutItemSynergiesInput.schema';
import { ItemUncheckedCreateWithoutItemSynergiesInputObjectSchema } from './ItemUncheckedCreateWithoutItemSynergiesInput.schema';
import { ItemCreateOrConnectWithoutItemSynergiesInputObjectSchema } from './ItemCreateOrConnectWithoutItemSynergiesInput.schema';
import { ItemUpsertWithoutItemSynergiesInputObjectSchema } from './ItemUpsertWithoutItemSynergiesInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutItemSynergiesInputObjectSchema } from './ItemUpdateWithoutItemSynergiesInput.schema';
import { ItemUncheckedUpdateWithoutItemSynergiesInputObjectSchema } from './ItemUncheckedUpdateWithoutItemSynergiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateOneRequiredWithoutItemSynergiesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemCreateWithoutItemSynergiesInputObjectSchema),
          z.lazy(
            () => ItemUncheckedCreateWithoutItemSynergiesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ItemCreateOrConnectWithoutItemSynergiesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ItemUpsertWithoutItemSynergiesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ItemUpdateWithoutItemSynergiesInputObjectSchema),
          z.lazy(
            () => ItemUncheckedUpdateWithoutItemSynergiesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ItemUpdateOneRequiredWithoutItemSynergiesNestedInputObjectSchema =
  Schema;
