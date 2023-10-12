"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemUpdateWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const RecipeUpdateOneRequiredWithoutIngredientsNestedInput_schema_1 = require("./RecipeUpdateOneRequiredWithoutIngredientsNestedInput.schema");
exports.RecipeItemUpdateWithoutItemInputObjectSchema = zod_1.z.object({
    quantity: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), recipe: zod_1.z.lazy(() => RecipeUpdateOneRequiredWithoutIngredientsNestedInput_schema_1.RecipeUpdateOneRequiredWithoutIngredientsNestedInputObjectSchema).optional()
}).strict();
