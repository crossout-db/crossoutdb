import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ItemUpdateOneRequiredWithoutRecipesNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutRecipesNestedInput.schema';
import { ReleaseUpdateOneWithoutRecipesNestedInputObjectSchema } from './ReleaseUpdateOneWithoutRecipesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeUpdateWithoutIngredientsInput> = z
  .object({
    quantity: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    craftCost: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    timestamp: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    active: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    result: z
      .lazy(() => ItemUpdateOneRequiredWithoutRecipesNestedInputObjectSchema)
      .optional(),
    release: z
      .lazy(() => ReleaseUpdateOneWithoutRecipesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const RecipeUpdateWithoutIngredientsInputObjectSchema = Schema;
