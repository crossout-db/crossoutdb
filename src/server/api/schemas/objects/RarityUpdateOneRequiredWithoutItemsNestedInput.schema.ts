import { z } from 'zod';
import { RarityCreateWithoutItemsInputObjectSchema } from './RarityCreateWithoutItemsInput.schema';
import { RarityUncheckedCreateWithoutItemsInputObjectSchema } from './RarityUncheckedCreateWithoutItemsInput.schema';
import { RarityCreateOrConnectWithoutItemsInputObjectSchema } from './RarityCreateOrConnectWithoutItemsInput.schema';
import { RarityUpsertWithoutItemsInputObjectSchema } from './RarityUpsertWithoutItemsInput.schema';
import { RarityWhereUniqueInputObjectSchema } from './RarityWhereUniqueInput.schema';
import { RarityUpdateWithoutItemsInputObjectSchema } from './RarityUpdateWithoutItemsInput.schema';
import { RarityUncheckedUpdateWithoutItemsInputObjectSchema } from './RarityUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RarityUpdateOneRequiredWithoutItemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RarityCreateWithoutItemsInputObjectSchema),
          z.lazy(() => RarityUncheckedCreateWithoutItemsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => RarityCreateOrConnectWithoutItemsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => RarityUpsertWithoutItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RarityWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RarityUpdateWithoutItemsInputObjectSchema),
          z.lazy(() => RarityUncheckedUpdateWithoutItemsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const RarityUpdateOneRequiredWithoutItemsNestedInputObjectSchema =
  Schema;
