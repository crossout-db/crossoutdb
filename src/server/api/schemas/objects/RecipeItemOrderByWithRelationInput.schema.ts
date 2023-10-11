import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RecipeOrderByWithRelationInputObjectSchema } from './RecipeOrderByWithRelationInput.schema';
import { ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    recipeId: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    recipe: z.lazy(() => RecipeOrderByWithRelationInputObjectSchema).optional(),
    item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const RecipeItemOrderByWithRelationInputObjectSchema = Schema;
