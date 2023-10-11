import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RecipeItemCountOrderByAggregateInputObjectSchema } from './RecipeItemCountOrderByAggregateInput.schema';
import { RecipeItemAvgOrderByAggregateInputObjectSchema } from './RecipeItemAvgOrderByAggregateInput.schema';
import { RecipeItemMaxOrderByAggregateInputObjectSchema } from './RecipeItemMaxOrderByAggregateInput.schema';
import { RecipeItemMinOrderByAggregateInputObjectSchema } from './RecipeItemMinOrderByAggregateInput.schema';
import { RecipeItemSumOrderByAggregateInputObjectSchema } from './RecipeItemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    recipeId: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RecipeItemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => RecipeItemAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => RecipeItemMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => RecipeItemMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => RecipeItemSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RecipeItemOrderByWithAggregationInputObjectSchema = Schema;
