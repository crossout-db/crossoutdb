import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { SynergyItemListRelationFilterObjectSchema } from './SynergyItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SynergyWhereInputObjectSchema),
        z.lazy(() => SynergyWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SynergyWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SynergyWhereInputObjectSchema),
        z.lazy(() => SynergyWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    synergyItems: z
      .lazy(() => SynergyItemListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const SynergyWhereInputObjectSchema = Schema;
