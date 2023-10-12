"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpdateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const NullableFloatFieldUpdateOperationsInput_schema_1 = require("./NullableFloatFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const ItemUpdateOneRequiredWithoutRecipesNestedInput_schema_1 = require("./ItemUpdateOneRequiredWithoutRecipesNestedInput.schema");
const ReleaseUpdateOneWithoutRecipesNestedInput_schema_1 = require("./ReleaseUpdateOneWithoutRecipesNestedInput.schema");
const RecipeItemUpdateManyWithoutRecipeNestedInput_schema_1 = require("./RecipeItemUpdateManyWithoutRecipeNestedInput.schema");
exports.RecipeUpdateInputObjectSchema = zod_1.z.object({
    quantity: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), craftCost: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableFloatFieldUpdateOperationsInput_schema_1.NullableFloatFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputObjectSchema)]).optional(), result: zod_1.z.lazy(() => ItemUpdateOneRequiredWithoutRecipesNestedInput_schema_1.ItemUpdateOneRequiredWithoutRecipesNestedInputObjectSchema).optional(), release: zod_1.z.lazy(() => ReleaseUpdateOneWithoutRecipesNestedInput_schema_1.ReleaseUpdateOneWithoutRecipesNestedInputObjectSchema).optional(), ingredients: zod_1.z.lazy(() => RecipeItemUpdateManyWithoutRecipeNestedInput_schema_1.RecipeItemUpdateManyWithoutRecipeNestedInputObjectSchema).optional()
}).strict();
