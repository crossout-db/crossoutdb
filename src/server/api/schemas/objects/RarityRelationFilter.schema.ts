import { z } from 'zod';
import { RarityWhereInputObjectSchema } from './RarityWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RarityRelationFilter> = z
  .object({
    is: z
      .lazy(() => RarityWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => RarityWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const RarityRelationFilterObjectSchema = Schema;
