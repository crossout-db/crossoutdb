import { z } from 'zod';
import { TypeUpdateWithoutItemsInputObjectSchema } from './TypeUpdateWithoutItemsInput.schema';
import { TypeUncheckedUpdateWithoutItemsInputObjectSchema } from './TypeUncheckedUpdateWithoutItemsInput.schema';
import { TypeCreateWithoutItemsInputObjectSchema } from './TypeCreateWithoutItemsInput.schema';
import { TypeUncheckedCreateWithoutItemsInputObjectSchema } from './TypeUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TypeUpsertWithoutItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => TypeUpdateWithoutItemsInputObjectSchema),
      z.lazy(() => TypeUncheckedUpdateWithoutItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TypeCreateWithoutItemsInputObjectSchema),
      z.lazy(() => TypeUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const TypeUpsertWithoutItemsInputObjectSchema = Schema;
