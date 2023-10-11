import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { TypeUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './TypeUpdateOneRequiredWithoutItemsNestedInput.schema';
import { CategoryUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './CategoryUpdateOneRequiredWithoutItemsNestedInput.schema';
import { FactionUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './FactionUpdateOneRequiredWithoutItemsNestedInput.schema';
import { RarityUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './RarityUpdateOneRequiredWithoutItemsNestedInput.schema';
import { ItemStatsUpdateManyWithoutItemNestedInputObjectSchema } from './ItemStatsUpdateManyWithoutItemNestedInput.schema';
import { MarketUpdateManyWithoutItemNestedInputObjectSchema } from './MarketUpdateManyWithoutItemNestedInput.schema';
import { BadgeExchangeUpdateManyWithoutItemNestedInputObjectSchema } from './BadgeExchangeUpdateManyWithoutItemNestedInput.schema';
import { RecipeUpdateManyWithoutResultNestedInputObjectSchema } from './RecipeUpdateManyWithoutResultNestedInput.schema';
import { RecipeItemUpdateManyWithoutItemNestedInputObjectSchema } from './RecipeItemUpdateManyWithoutItemNestedInput.schema';
import { PackItemUpdateManyWithoutItemNestedInputObjectSchema } from './PackItemUpdateManyWithoutItemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateWithoutItemSynergiesInput> = z
  .object({
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
    type: z
      .lazy(() => TypeUpdateOneRequiredWithoutItemsNestedInputObjectSchema)
      .optional(),
    category: z
      .lazy(() => CategoryUpdateOneRequiredWithoutItemsNestedInputObjectSchema)
      .optional(),
    faction: z
      .lazy(() => FactionUpdateOneRequiredWithoutItemsNestedInputObjectSchema)
      .optional(),
    rarity: z
      .lazy(() => RarityUpdateOneRequiredWithoutItemsNestedInputObjectSchema)
      .optional(),
    itemStats: z
      .lazy(() => ItemStatsUpdateManyWithoutItemNestedInputObjectSchema)
      .optional(),
    market: z
      .lazy(() => MarketUpdateManyWithoutItemNestedInputObjectSchema)
      .optional(),
    badgeExchange: z
      .lazy(() => BadgeExchangeUpdateManyWithoutItemNestedInputObjectSchema)
      .optional(),
    recipes: z
      .lazy(() => RecipeUpdateManyWithoutResultNestedInputObjectSchema)
      .optional(),
    recipeItems: z
      .lazy(() => RecipeItemUpdateManyWithoutItemNestedInputObjectSchema)
      .optional(),
    packItems: z
      .lazy(() => PackItemUpdateManyWithoutItemNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemUpdateWithoutItemSynergiesInputObjectSchema = Schema;
