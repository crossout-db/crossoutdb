import { z } from 'zod';
import { logWhereInputObjectSchema } from './logWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogListRelationFilter> = z
  .object({
    every: z.lazy(() => logWhereInputObjectSchema).optional(),
    some: z.lazy(() => logWhereInputObjectSchema).optional(),
    none: z.lazy(() => logWhereInputObjectSchema).optional(),
  })
  .strict();

export const LogListRelationFilterObjectSchema = Schema;
