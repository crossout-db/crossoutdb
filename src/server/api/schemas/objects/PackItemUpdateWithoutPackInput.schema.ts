import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ItemUpdateOneRequiredWithoutPackItemsNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutPackItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemUpdateWithoutPackInput> = z
  .object({
    quantity: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    item: z
      .lazy(() => ItemUpdateOneRequiredWithoutPackItemsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PackItemUpdateWithoutPackInputObjectSchema = Schema;
