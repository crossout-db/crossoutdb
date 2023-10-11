import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUncheckedUpdateManyWithoutSynergyItemsInput> =
  z
    .object({
      itemId: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const SynergyItemUncheckedUpdateManyWithoutSynergyItemsInputObjectSchema =
  Schema;
