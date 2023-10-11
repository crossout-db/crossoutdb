import { z } from 'zod';
import { TypeWhereInputObjectSchema } from './TypeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TypeRelationFilter> = z
  .object({
    is: z
      .lazy(() => TypeWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TypeWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TypeRelationFilterObjectSchema = Schema;
