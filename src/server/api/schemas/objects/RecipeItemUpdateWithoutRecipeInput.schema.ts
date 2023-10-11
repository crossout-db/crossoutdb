import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ItemUpdateOneRequiredWithoutRecipeItemsNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutRecipeItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemUpdateWithoutRecipeInput> = z
  .object({
    quantity: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    item: z
      .lazy(
        () => ItemUpdateOneRequiredWithoutRecipeItemsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RecipeItemUpdateWithoutRecipeInputObjectSchema = Schema;
