import { z } from 'zod';
import { ItemCreateWithoutRarityInputObjectSchema } from './ItemCreateWithoutRarityInput.schema';
import { ItemUncheckedCreateWithoutRarityInputObjectSchema } from './ItemUncheckedCreateWithoutRarityInput.schema';
import { ItemCreateOrConnectWithoutRarityInputObjectSchema } from './ItemCreateOrConnectWithoutRarityInput.schema';
import { ItemCreateManyRarityInputEnvelopeObjectSchema } from './ItemCreateManyRarityInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUncheckedCreateNestedManyWithoutRarityInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemCreateWithoutRarityInputObjectSchema),
          z.lazy(() => ItemCreateWithoutRarityInputObjectSchema).array(),
          z.lazy(() => ItemUncheckedCreateWithoutRarityInputObjectSchema),
          z
            .lazy(() => ItemUncheckedCreateWithoutRarityInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemCreateOrConnectWithoutRarityInputObjectSchema),
          z
            .lazy(() => ItemCreateOrConnectWithoutRarityInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemCreateManyRarityInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemWhereUniqueInputObjectSchema),
          z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemUncheckedCreateNestedManyWithoutRarityInputObjectSchema =
  Schema;
