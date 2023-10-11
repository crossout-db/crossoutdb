import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ItemUpdateManyWithoutTypeNestedInputObjectSchema } from './ItemUpdateManyWithoutTypeNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TypeUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    items: z
      .lazy(() => ItemUpdateManyWithoutTypeNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TypeUpdateInputObjectSchema = Schema;
