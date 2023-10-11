import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ItemUpdateManyWithoutFactionNestedInputObjectSchema } from './ItemUpdateManyWithoutFactionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FactionUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    items: z
      .lazy(() => ItemUpdateManyWithoutFactionNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const FactionUpdateInputObjectSchema = Schema;
