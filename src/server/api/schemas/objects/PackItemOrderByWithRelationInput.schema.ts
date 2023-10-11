import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PackOrderByWithRelationInputObjectSchema } from './PackOrderByWithRelationInput.schema';
import { ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    packId: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    pack: z.lazy(() => PackOrderByWithRelationInputObjectSchema).optional(),
    item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const PackItemOrderByWithRelationInputObjectSchema = Schema;
