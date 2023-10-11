import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SynergyItemUncheckedUpdateManyWithoutSynergyNestedInputObjectSchema } from './SynergyItemUncheckedUpdateManyWithoutSynergyNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    synergyItems: z
      .lazy(
        () =>
          SynergyItemUncheckedUpdateManyWithoutSynergyNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SynergyUncheckedUpdateInputObjectSchema = Schema;
