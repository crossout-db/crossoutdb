import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { PackUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './PackUpdateOneRequiredWithoutItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemUpdateWithoutItemInput> = z
  .object({
    quantity: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pack: z
      .lazy(() => PackUpdateOneRequiredWithoutItemsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PackItemUpdateWithoutItemInputObjectSchema = Schema;
