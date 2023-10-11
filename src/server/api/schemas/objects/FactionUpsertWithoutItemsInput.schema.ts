import { z } from 'zod';
import { FactionUpdateWithoutItemsInputObjectSchema } from './FactionUpdateWithoutItemsInput.schema';
import { FactionUncheckedUpdateWithoutItemsInputObjectSchema } from './FactionUncheckedUpdateWithoutItemsInput.schema';
import { FactionCreateWithoutItemsInputObjectSchema } from './FactionCreateWithoutItemsInput.schema';
import { FactionUncheckedCreateWithoutItemsInputObjectSchema } from './FactionUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FactionUpsertWithoutItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => FactionUpdateWithoutItemsInputObjectSchema),
      z.lazy(() => FactionUncheckedUpdateWithoutItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => FactionCreateWithoutItemsInputObjectSchema),
      z.lazy(() => FactionUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const FactionUpsertWithoutItemsInputObjectSchema = Schema;
