import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SynergyItemUpdateManyWithoutSynergyNestedInputObjectSchema } from './SynergyItemUpdateManyWithoutSynergyNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    synergyItems: z
      .lazy(() => SynergyItemUpdateManyWithoutSynergyNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SynergyUpdateInputObjectSchema = Schema;
