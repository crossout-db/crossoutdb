import { z } from 'zod';
import { ItemUpdateOneRequiredWithoutItemSynergiesNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutItemSynergiesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUpdateWithoutSynergyInput> = z
  .object({
    item: z
      .lazy(
        () => ItemUpdateOneRequiredWithoutItemSynergiesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SynergyItemUpdateWithoutSynergyInputObjectSchema = Schema;
