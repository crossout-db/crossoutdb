import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ReleaseUpdateOneWithoutPacksNestedInputObjectSchema } from './ReleaseUpdateOneWithoutPacksNestedInput.schema';
import { PackItemUpdateManyWithoutPackNestedInputObjectSchema } from './PackItemUpdateManyWithoutPackNestedInput.schema';
import { PackPriceUpdateManyWithoutPackNestedInputObjectSchema } from './PackPriceUpdateManyWithoutPackNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    steamAppID: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    key: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    coins: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    active: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    release: z
      .lazy(() => ReleaseUpdateOneWithoutPacksNestedInputObjectSchema)
      .optional(),
    items: z
      .lazy(() => PackItemUpdateManyWithoutPackNestedInputObjectSchema)
      .optional(),
    packPrices: z
      .lazy(() => PackPriceUpdateManyWithoutPackNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PackUpdateInputObjectSchema = Schema;
