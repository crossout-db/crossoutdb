import { z } from 'zod';
import { FactionWhereInputObjectSchema } from './FactionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FactionRelationFilter> = z
  .object({
    is: z
      .lazy(() => FactionWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => FactionWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const FactionRelationFilterObjectSchema = Schema;
