import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { PackUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './PackUpdateOneRequiredWithoutItemsNestedInput.schema';
import { ItemUpdateOneRequiredWithoutPackItemsNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutPackItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemUpdateInput> = z
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
    item: z
      .lazy(() => ItemUpdateOneRequiredWithoutPackItemsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PackItemUpdateInputObjectSchema = Schema;
