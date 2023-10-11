import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SynergyItemScalarWhereInputObjectSchema),
        z.lazy(() => SynergyItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SynergyItemScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SynergyItemScalarWhereInputObjectSchema),
        z.lazy(() => SynergyItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    synergyId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    itemId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const SynergyItemScalarWhereInputObjectSchema = Schema;
