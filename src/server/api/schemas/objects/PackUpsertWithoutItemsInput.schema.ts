import { z } from 'zod';
import { PackUpdateWithoutItemsInputObjectSchema } from './PackUpdateWithoutItemsInput.schema';
import { PackUncheckedUpdateWithoutItemsInputObjectSchema } from './PackUncheckedUpdateWithoutItemsInput.schema';
import { PackCreateWithoutItemsInputObjectSchema } from './PackCreateWithoutItemsInput.schema';
import { PackUncheckedCreateWithoutItemsInputObjectSchema } from './PackUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackUpsertWithoutItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PackUpdateWithoutItemsInputObjectSchema),
      z.lazy(() => PackUncheckedUpdateWithoutItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PackCreateWithoutItemsInputObjectSchema),
      z.lazy(() => PackUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const PackUpsertWithoutItemsInputObjectSchema = Schema;
