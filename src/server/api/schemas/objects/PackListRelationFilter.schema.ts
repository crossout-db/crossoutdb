import { z } from 'zod';
import { PackWhereInputObjectSchema } from './PackWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackListRelationFilter> = z
  .object({
    every: z.lazy(() => PackWhereInputObjectSchema).optional(),
    some: z.lazy(() => PackWhereInputObjectSchema).optional(),
    none: z.lazy(() => PackWhereInputObjectSchema).optional(),
  })
  .strict();

export const PackListRelationFilterObjectSchema = Schema;
