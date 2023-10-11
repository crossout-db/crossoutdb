import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReleaseOrderByWithRelationInputObjectSchema } from './ReleaseOrderByWithRelationInput.schema';
import { PackItemOrderByRelationAggregateInputObjectSchema } from './PackItemOrderByRelationAggregateInput.schema';
import { PackPriceOrderByRelationAggregateInputObjectSchema } from './PackPriceOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    steamAppID: z.lazy(() => SortOrderSchema).optional(),
    key: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    coins: z.lazy(() => SortOrderSchema).optional(),
    releaseId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    active: z.lazy(() => SortOrderSchema).optional(),
    release: z
      .lazy(() => ReleaseOrderByWithRelationInputObjectSchema)
      .optional(),
    items: z
      .lazy(() => PackItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    packPrices: z
      .lazy(() => PackPriceOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PackOrderByWithRelationInputObjectSchema = Schema;
