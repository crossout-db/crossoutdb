import { z } from 'zod';
import { FactionCreateWithoutItemsInputObjectSchema } from './FactionCreateWithoutItemsInput.schema';
import { FactionUncheckedCreateWithoutItemsInputObjectSchema } from './FactionUncheckedCreateWithoutItemsInput.schema';
import { FactionCreateOrConnectWithoutItemsInputObjectSchema } from './FactionCreateOrConnectWithoutItemsInput.schema';
import { FactionUpsertWithoutItemsInputObjectSchema } from './FactionUpsertWithoutItemsInput.schema';
import { FactionWhereUniqueInputObjectSchema } from './FactionWhereUniqueInput.schema';
import { FactionUpdateWithoutItemsInputObjectSchema } from './FactionUpdateWithoutItemsInput.schema';
import { FactionUncheckedUpdateWithoutItemsInputObjectSchema } from './FactionUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FactionUpdateOneRequiredWithoutItemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FactionCreateWithoutItemsInputObjectSchema),
          z.lazy(() => FactionUncheckedCreateWithoutItemsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => FactionCreateOrConnectWithoutItemsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => FactionUpsertWithoutItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => FactionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => FactionUpdateWithoutItemsInputObjectSchema),
          z.lazy(() => FactionUncheckedUpdateWithoutItemsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const FactionUpdateOneRequiredWithoutItemsNestedInputObjectSchema =
  Schema;
