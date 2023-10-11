import { z } from 'zod';
import { SynergyItemWhereInputObjectSchema } from './SynergyItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemListRelationFilter> = z
  .object({
    every: z.lazy(() => SynergyItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => SynergyItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => SynergyItemWhereInputObjectSchema).optional(),
  })
  .strict();

export const SynergyItemListRelationFilterObjectSchema = Schema;
