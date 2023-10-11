import { z } from 'zod';
import { PackItemWhereInputObjectSchema } from './PackItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemListRelationFilter> = z
  .object({
    every: z.lazy(() => PackItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => PackItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => PackItemWhereInputObjectSchema).optional(),
  })
  .strict();

export const PackItemListRelationFilterObjectSchema = Schema;
