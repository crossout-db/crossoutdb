import { z } from 'zod';
import { PackPriceWhereInputObjectSchema } from './PackPriceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceListRelationFilter> = z
  .object({
    every: z.lazy(() => PackPriceWhereInputObjectSchema).optional(),
    some: z.lazy(() => PackPriceWhereInputObjectSchema).optional(),
    none: z.lazy(() => PackPriceWhereInputObjectSchema).optional(),
  })
  .strict();

export const PackPriceListRelationFilterObjectSchema = Schema;
