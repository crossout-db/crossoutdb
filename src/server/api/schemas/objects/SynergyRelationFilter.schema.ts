import { z } from 'zod';
import { SynergyWhereInputObjectSchema } from './SynergyWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyRelationFilter> = z
  .object({
    is: z
      .lazy(() => SynergyWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SynergyWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SynergyRelationFilterObjectSchema = Schema;
