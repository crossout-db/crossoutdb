import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SynergyOrderByWithRelationInputObjectSchema } from './SynergyOrderByWithRelationInput.schema';
import { ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemOrderByWithRelationInput> = z
  .object({
    synergyId: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    synergy: z
      .lazy(() => SynergyOrderByWithRelationInputObjectSchema)
      .optional(),
    item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const SynergyItemOrderByWithRelationInputObjectSchema = Schema;
