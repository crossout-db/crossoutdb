"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateWithoutPackItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const NullableFloatFieldUpdateOperationsInput_schema_1 = require("./NullableFloatFieldUpdateOperationsInput.schema");
const NullableIntFieldUpdateOperationsInput_schema_1 = require("./NullableIntFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const TypeUpdateOneRequiredWithoutItemsNestedInput_schema_1 = require("./TypeUpdateOneRequiredWithoutItemsNestedInput.schema");
const CategoryUpdateOneRequiredWithoutItemsNestedInput_schema_1 = require("./CategoryUpdateOneRequiredWithoutItemsNestedInput.schema");
const FactionUpdateOneRequiredWithoutItemsNestedInput_schema_1 = require("./FactionUpdateOneRequiredWithoutItemsNestedInput.schema");
const RarityUpdateOneRequiredWithoutItemsNestedInput_schema_1 = require("./RarityUpdateOneRequiredWithoutItemsNestedInput.schema");
const ItemStatsUpdateManyWithoutItemNestedInput_schema_1 = require("./ItemStatsUpdateManyWithoutItemNestedInput.schema");
const MarketUpdateManyWithoutItemNestedInput_schema_1 = require("./MarketUpdateManyWithoutItemNestedInput.schema");
const BadgeExchangeUpdateManyWithoutItemNestedInput_schema_1 = require("./BadgeExchangeUpdateManyWithoutItemNestedInput.schema");
const RecipeUpdateManyWithoutResultNestedInput_schema_1 = require("./RecipeUpdateManyWithoutResultNestedInput.schema");
const RecipeItemUpdateManyWithoutItemNestedInput_schema_1 = require("./RecipeItemUpdateManyWithoutItemNestedInput.schema");
const SynergyItemUpdateManyWithoutItemNestedInput_schema_1 = require("./SynergyItemUpdateManyWithoutItemNestedInput.schema");
exports.ItemUpdateWithoutPackItemsInputObjectSchema = zod_1.z.object({
    name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), marketDef: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), quantity: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), level: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), sellPriceMin: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableFloatFieldUpdateOperationsInput_schema_1.NullableFloatFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), sellOrders: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), buyPriceMax: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableFloatFieldUpdateOperationsInput_schema_1.NullableFloatFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), buyOrders: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), craftCost: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableFloatFieldUpdateOperationsInput_schema_1.NullableFloatFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputObjectSchema)]).optional(), logId: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableIntFieldUpdateOperationsInput_schema_1.NullableIntFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), type: zod_1.z.lazy(() => TypeUpdateOneRequiredWithoutItemsNestedInput_schema_1.TypeUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional(), category: zod_1.z.lazy(() => CategoryUpdateOneRequiredWithoutItemsNestedInput_schema_1.CategoryUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional(), faction: zod_1.z.lazy(() => FactionUpdateOneRequiredWithoutItemsNestedInput_schema_1.FactionUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional(), rarity: zod_1.z.lazy(() => RarityUpdateOneRequiredWithoutItemsNestedInput_schema_1.RarityUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional(), itemStats: zod_1.z.lazy(() => ItemStatsUpdateManyWithoutItemNestedInput_schema_1.ItemStatsUpdateManyWithoutItemNestedInputObjectSchema).optional(), market: zod_1.z.lazy(() => MarketUpdateManyWithoutItemNestedInput_schema_1.MarketUpdateManyWithoutItemNestedInputObjectSchema).optional(), badgeExchange: zod_1.z.lazy(() => BadgeExchangeUpdateManyWithoutItemNestedInput_schema_1.BadgeExchangeUpdateManyWithoutItemNestedInputObjectSchema).optional(), recipes: zod_1.z.lazy(() => RecipeUpdateManyWithoutResultNestedInput_schema_1.RecipeUpdateManyWithoutResultNestedInputObjectSchema).optional(), recipeItems: zod_1.z.lazy(() => RecipeItemUpdateManyWithoutItemNestedInput_schema_1.RecipeItemUpdateManyWithoutItemNestedInputObjectSchema).optional(), itemSynergies: zod_1.z.lazy(() => SynergyItemUpdateManyWithoutItemNestedInput_schema_1.SynergyItemUpdateManyWithoutItemNestedInputObjectSchema).optional()
}).strict();
