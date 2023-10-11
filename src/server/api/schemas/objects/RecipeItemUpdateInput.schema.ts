import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { RecipeUpdateOneRequiredWithoutIngredientsNestedInputObjectSchema } from './RecipeUpdateOneRequiredWithoutIngredientsNestedInput.schema';
import { ItemUpdateOneRequiredWithoutRecipeItemsNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutRecipeItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemUpdateInput> = z
  .object({
    quantity: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    recipe: z
      .lazy(
        () => RecipeUpdateOneRequiredWithoutIngredientsNestedInputObjectSchema,
      )
      .optional(),
    item: z
      .lazy(
        () => ItemUpdateOneRequiredWithoutRecipeItemsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RecipeItemUpdateInputObjectSchema = Schema;
