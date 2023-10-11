import { z } from 'zod';
import { ReleaseWhereInputObjectSchema } from './ReleaseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseRelationFilter> = z
  .object({
    is: z
      .lazy(() => ReleaseWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ReleaseWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ReleaseRelationFilterObjectSchema = Schema;
