import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SynergyItemOrderByRelationAggregateInputObjectSchema } from './SynergyItemOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    synergyItems: z
      .lazy(() => SynergyItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SynergyOrderByWithRelationInputObjectSchema = Schema;
