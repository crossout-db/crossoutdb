import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ItemStatsOrderByRelationAggregateInputObjectSchema } from './ItemStatsOrderByRelationAggregateInput.schema';
import { RecipeOrderByRelationAggregateInputObjectSchema } from './RecipeOrderByRelationAggregateInput.schema';
import { PackOrderByRelationAggregateInputObjectSchema } from './PackOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    xoVersion: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    build: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    battlePass: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    url: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    startDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    endDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    active: z.lazy(() => SortOrderSchema).optional(),
    itemStats: z
      .lazy(() => ItemStatsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    recipes: z
      .lazy(() => RecipeOrderByRelationAggregateInputObjectSchema)
      .optional(),
    packs: z
      .lazy(() => PackOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReleaseOrderByWithRelationInputObjectSchema = Schema;
