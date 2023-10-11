import { z } from 'zod';
import { ItemCreateNestedOneWithoutRecipesInputObjectSchema } from './ItemCreateNestedOneWithoutRecipesInput.schema';
import { ReleaseCreateNestedOneWithoutRecipesInputObjectSchema } from './ReleaseCreateNestedOneWithoutRecipesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeCreateWithoutIngredientsInput> = z
  .object({
    quantity: z.number(),
    craftCost: z.number().optional().nullable(),
    timestamp: z.coerce.date().optional().nullable(),
    active: z.boolean(),
    result: z.lazy(() => ItemCreateNestedOneWithoutRecipesInputObjectSchema),
    release: z
      .lazy(() => ReleaseCreateNestedOneWithoutRecipesInputObjectSchema)
      .optional(),
  })
  .strict();

export const RecipeCreateWithoutIngredientsInputObjectSchema = Schema;
