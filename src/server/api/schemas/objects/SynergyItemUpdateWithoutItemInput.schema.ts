import { z } from 'zod';
import { SynergyUpdateOneRequiredWithoutSynergyItemsNestedInputObjectSchema } from './SynergyUpdateOneRequiredWithoutSynergyItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUpdateWithoutItemInput> = z
  .object({
    synergy: z
      .lazy(
        () =>
          SynergyUpdateOneRequiredWithoutSynergyItemsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SynergyItemUpdateWithoutItemInputObjectSchema = Schema;
