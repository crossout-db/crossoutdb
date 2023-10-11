import { z } from 'zod';
import { SynergyCreateNestedOneWithoutSynergyItemsInputObjectSchema } from './SynergyCreateNestedOneWithoutSynergyItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemCreateWithoutItemInput> = z
  .object({
    synergy: z.lazy(
      () => SynergyCreateNestedOneWithoutSynergyItemsInputObjectSchema,
    ),
  })
  .strict();

export const SynergyItemCreateWithoutItemInputObjectSchema = Schema;
