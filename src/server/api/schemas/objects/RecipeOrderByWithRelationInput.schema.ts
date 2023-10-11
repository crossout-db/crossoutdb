import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema';
import { ReleaseOrderByWithRelationInputObjectSchema } from './ReleaseOrderByWithRelationInput.schema';
import { RecipeItemOrderByRelationAggregateInputObjectSchema } from './RecipeItemOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeOrderByWithRelationInput> = z
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
    result: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional(),
    release: z
      .lazy(() => ReleaseOrderByWithRelationInputObjectSchema)
      .optional(),
    ingredients: z
      .lazy(() => RecipeItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RecipeOrderByWithRelationInputObjectSchema = Schema;
