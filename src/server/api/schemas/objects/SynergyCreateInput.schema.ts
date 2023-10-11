import { z } from 'zod';
import { SynergyItemCreateNestedManyWithoutSynergyInputObjectSchema } from './SynergyItemCreateNestedManyWithoutSynergyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyCreateInput> = z
  .object({
    name: z.string(),
    synergyItems: z
      .lazy(() => SynergyItemCreateNestedManyWithoutSynergyInputObjectSchema)
      .optional(),
  })
  .strict();

export const SynergyCreateInputObjectSchema = Schema;
