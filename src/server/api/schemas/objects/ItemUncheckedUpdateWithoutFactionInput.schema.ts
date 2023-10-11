import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ItemStatsUncheckedUpdateManyWithoutItemNestedInputObjectSchema } from './ItemStatsUncheckedUpdateManyWithoutItemNestedInput.schema';
import { MarketUncheckedUpdateManyWithoutItemNestedInputObjectSchema } from './MarketUncheckedUpdateManyWithoutItemNestedInput.schema';
import { BadgeExchangeUncheckedUpdateManyWithoutItemNestedInputObjectSchema } from './BadgeExchangeUncheckedUpdateManyWithoutItemNestedInput.schema';
import { RecipeUncheckedUpdateManyWithoutResultNestedInputObjectSchema } from './RecipeUncheckedUpdateManyWithoutResultNestedInput.schema';
import { RecipeItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema } from './RecipeItemUncheckedUpdateManyWithoutItemNestedInput.schema';
import { PackItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema } from './PackItemUncheckedUpdateManyWithoutItemNestedInput.schema';
import { SynergyItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema } from './SynergyItemUncheckedUpdateManyWithoutItemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUncheckedUpdateWithoutFactionInput> = z
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
    marketDef: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    quantity: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    typeId: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    categoryId: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    rarityId: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    level: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    sellPriceMin: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    sellOrders: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    buyPriceMax: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    buyOrders: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    craftCost: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    timestamp: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    active: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    logId: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    itemStats: z
      .lazy(
        () => ItemStatsUncheckedUpdateManyWithoutItemNestedInputObjectSchema,
      )
      .optional(),
    market: z
      .lazy(() => MarketUncheckedUpdateManyWithoutItemNestedInputObjectSchema)
      .optional(),
    badgeExchange: z
      .lazy(
        () =>
          BadgeExchangeUncheckedUpdateManyWithoutItemNestedInputObjectSchema,
      )
      .optional(),
    recipes: z
      .lazy(() => RecipeUncheckedUpdateManyWithoutResultNestedInputObjectSchema)
      .optional(),
    recipeItems: z
      .lazy(
        () => RecipeItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema,
      )
      .optional(),
    packItems: z
      .lazy(() => PackItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema)
      .optional(),
    itemSynergies: z
      .lazy(
        () => SynergyItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ItemUncheckedUpdateWithoutFactionInputObjectSchema = Schema;
