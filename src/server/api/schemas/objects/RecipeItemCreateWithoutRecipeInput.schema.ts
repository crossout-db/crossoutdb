import { z } from 'zod';
import { ItemCreateNestedOneWithoutRecipeItemsInputObjectSchema } from './ItemCreateNestedOneWithoutRecipeItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemCreateWithoutRecipeInput> = z
  .object({
    quantity: z.number(),
    item: z.lazy(() => ItemCreateNestedOneWithoutRecipeItemsInputObjectSchema),
  })
  .strict();

export const RecipeItemCreateWithoutRecipeInputObjectSchema = Schema;
