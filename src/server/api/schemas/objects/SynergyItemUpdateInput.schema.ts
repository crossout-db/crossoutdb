import { z } from 'zod';
import { SynergyUpdateOneRequiredWithoutSynergyItemsNestedInputObjectSchema } from './SynergyUpdateOneRequiredWithoutSynergyItemsNestedInput.schema';
import { ItemUpdateOneRequiredWithoutItemSynergiesNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutItemSynergiesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUpdateInput> = z
  .object({
    synergy: z
      .lazy(
        () =>
          SynergyUpdateOneRequiredWithoutSynergyItemsNestedInputObjectSchema,
      )
      .optional(),
    item: z
      .lazy(
        () => ItemUpdateOneRequiredWithoutItemSynergiesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SynergyItemUpdateInputObjectSchema = Schema;
