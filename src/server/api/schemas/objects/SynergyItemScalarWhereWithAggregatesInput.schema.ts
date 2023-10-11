import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SynergyItemScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => SynergyItemScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SynergyItemScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SynergyItemScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => SynergyItemScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    synergyId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    itemId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const SynergyItemScalarWhereWithAggregatesInputObjectSchema = Schema;
