import { z } from 'zod';
import { SynergyItemUncheckedCreateNestedManyWithoutSynergyInputObjectSchema } from './SynergyItemUncheckedCreateNestedManyWithoutSynergyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    synergyItems: z
      .lazy(
        () =>
          SynergyItemUncheckedCreateNestedManyWithoutSynergyInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SynergyUncheckedCreateInputObjectSchema = Schema;
