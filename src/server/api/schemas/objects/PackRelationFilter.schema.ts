import { z } from 'zod';
import { PackWhereInputObjectSchema } from './PackWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackRelationFilter> = z
  .object({
    is: z
      .lazy(() => PackWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PackWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const PackRelationFilterObjectSchema = Schema;
