import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RecipeCountOrderByAggregateInputObjectSchema } from './RecipeCountOrderByAggregateInput.schema';
import { RecipeAvgOrderByAggregateInputObjectSchema } from './RecipeAvgOrderByAggregateInput.schema';
import { RecipeMaxOrderByAggregateInputObjectSchema } from './RecipeMaxOrderByAggregateInput.schema';
import { RecipeMinOrderByAggregateInputObjectSchema } from './RecipeMinOrderByAggregateInput.schema';
import { RecipeSumOrderByAggregateInputObjectSchema } from './RecipeSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    resultItemId: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    releaseId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    craftCost: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    timestamp: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    active: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RecipeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => RecipeAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RecipeMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RecipeMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => RecipeSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const RecipeOrderByWithAggregationInputObjectSchema = Schema;
