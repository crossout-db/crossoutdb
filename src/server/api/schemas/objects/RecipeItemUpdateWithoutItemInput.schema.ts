import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { RecipeUpdateOneRequiredWithoutIngredientsNestedInputObjectSchema } from './RecipeUpdateOneRequiredWithoutIngredientsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemUpdateWithoutItemInput> = z
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
  })
  .strict();

export const RecipeItemUpdateWithoutItemInputObjectSchema = Schema;
