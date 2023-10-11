import { z } from 'zod';
import { RarityUpdateWithoutItemsInputObjectSchema } from './RarityUpdateWithoutItemsInput.schema';
import { RarityUncheckedUpdateWithoutItemsInputObjectSchema } from './RarityUncheckedUpdateWithoutItemsInput.schema';
import { RarityCreateWithoutItemsInputObjectSchema } from './RarityCreateWithoutItemsInput.schema';
import { RarityUncheckedCreateWithoutItemsInputObjectSchema } from './RarityUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RarityUpsertWithoutItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => RarityUpdateWithoutItemsInputObjectSchema),
      z.lazy(() => RarityUncheckedUpdateWithoutItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RarityCreateWithoutItemsInputObjectSchema),
      z.lazy(() => RarityUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const RarityUpsertWithoutItemsInputObjectSchema = Schema;
