import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { SynergyRelationFilterObjectSchema } from './SynergyRelationFilter.schema';
import { SynergyWhereInputObjectSchema } from './SynergyWhereInput.schema';
import { ItemRelationFilterObjectSchema } from './ItemRelationFilter.schema';
import { ItemWhereInputObjectSchema } from './ItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SynergyItemWhereInputObjectSchema),
        z.lazy(() => SynergyItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SynergyItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SynergyItemWhereInputObjectSchema),
        z.lazy(() => SynergyItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    synergyId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    itemId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    synergy: z
      .union([
        z.lazy(() => SynergyRelationFilterObjectSchema),
        z.lazy(() => SynergyWhereInputObjectSchema),
      ])
      .optional(),
    item: z
      .union([
        z.lazy(() => ItemRelationFilterObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const SynergyItemWhereInputObjectSchema = Schema;
