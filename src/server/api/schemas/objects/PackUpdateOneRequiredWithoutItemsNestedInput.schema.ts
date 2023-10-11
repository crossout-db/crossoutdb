import { z } from 'zod';
import { PackCreateWithoutItemsInputObjectSchema } from './PackCreateWithoutItemsInput.schema';
import { PackUncheckedCreateWithoutItemsInputObjectSchema } from './PackUncheckedCreateWithoutItemsInput.schema';
import { PackCreateOrConnectWithoutItemsInputObjectSchema } from './PackCreateOrConnectWithoutItemsInput.schema';
import { PackUpsertWithoutItemsInputObjectSchema } from './PackUpsertWithoutItemsInput.schema';
import { PackWhereUniqueInputObjectSchema } from './PackWhereUniqueInput.schema';
import { PackUpdateWithoutItemsInputObjectSchema } from './PackUpdateWithoutItemsInput.schema';
import { PackUncheckedUpdateWithoutItemsInputObjectSchema } from './PackUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackUpdateOneRequiredWithoutItemsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PackCreateWithoutItemsInputObjectSchema),
        z.lazy(() => PackUncheckedCreateWithoutItemsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PackCreateOrConnectWithoutItemsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => PackUpsertWithoutItemsInputObjectSchema).optional(),
    connect: z.lazy(() => PackWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => PackUpdateWithoutItemsInputObjectSchema),
        z.lazy(() => PackUncheckedUpdateWithoutItemsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PackUpdateOneRequiredWithoutItemsNestedInputObjectSchema = Schema;
