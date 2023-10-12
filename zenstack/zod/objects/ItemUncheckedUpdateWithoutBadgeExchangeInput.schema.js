"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUncheckedUpdateWithoutBadgeExchangeInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const NullableFloatFieldUpdateOperationsInput_schema_1 = require("./NullableFloatFieldUpdateOperationsInput.schema");
const NullableIntFieldUpdateOperationsInput_schema_1 = require("./NullableIntFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const ItemStatsUncheckedUpdateManyWithoutItemNestedInput_schema_1 = require("./ItemStatsUncheckedUpdateManyWithoutItemNestedInput.schema");
const MarketUncheckedUpdateManyWithoutItemNestedInput_schema_1 = require("./MarketUncheckedUpdateManyWithoutItemNestedInput.schema");
const RecipeUncheckedUpdateManyWithoutResultNestedInput_schema_1 = require("./RecipeUncheckedUpdateManyWithoutResultNestedInput.schema");
const RecipeItemUncheckedUpdateManyWithoutItemNestedInput_schema_1 = require("./RecipeItemUncheckedUpdateManyWithoutItemNestedInput.schema");
const PackItemUncheckedUpdateManyWithoutItemNestedInput_schema_1 = require("./PackItemUncheckedUpdateManyWithoutItemNestedInput.schema");
const SynergyItemUncheckedUpdateManyWithoutItemNestedInput_schema_1 = require("./SynergyItemUncheckedUpdateManyWithoutItemNestedInput.schema");
exports.ItemUncheckedUpdateWithoutBadgeExchangeInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), marketDef: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), quantity: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), typeId: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), categoryId: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), factionId: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), rarityId: zod_1.z.union([zod_1.z.number(),
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
        zod_1.z.null()]).optional().nullable(), itemStats: zod_1.z.lazy(() => ItemStatsUncheckedUpdateManyWithoutItemNestedInput_schema_1.ItemStatsUncheckedUpdateManyWithoutItemNestedInputObjectSchema).optional(), market: zod_1.z.lazy(() => MarketUncheckedUpdateManyWithoutItemNestedInput_schema_1.MarketUncheckedUpdateManyWithoutItemNestedInputObjectSchema).optional(), recipes: zod_1.z.lazy(() => RecipeUncheckedUpdateManyWithoutResultNestedInput_schema_1.RecipeUncheckedUpdateManyWithoutResultNestedInputObjectSchema).optional(), recipeItems: zod_1.z.lazy(() => RecipeItemUncheckedUpdateManyWithoutItemNestedInput_schema_1.RecipeItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema).optional(), packItems: zod_1.z.lazy(() => PackItemUncheckedUpdateManyWithoutItemNestedInput_schema_1.PackItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema).optional(), itemSynergies: zod_1.z.lazy(() => SynergyItemUncheckedUpdateManyWithoutItemNestedInput_schema_1.SynergyItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema).optional()
}).strict();
