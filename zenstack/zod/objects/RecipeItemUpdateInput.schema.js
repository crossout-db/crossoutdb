"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemUpdateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const RecipeUpdateOneRequiredWithoutIngredientsNestedInput_schema_1 = require("./RecipeUpdateOneRequiredWithoutIngredientsNestedInput.schema");
const ItemUpdateOneRequiredWithoutRecipeItemsNestedInput_schema_1 = require("./ItemUpdateOneRequiredWithoutRecipeItemsNestedInput.schema");
exports.RecipeItemUpdateInputObjectSchema = zod_1.z.object({
    quantity: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), recipe: zod_1.z.lazy(() => RecipeUpdateOneRequiredWithoutIngredientsNestedInput_schema_1.RecipeUpdateOneRequiredWithoutIngredientsNestedInputObjectSchema).optional(), item: zod_1.z.lazy(() => ItemUpdateOneRequiredWithoutRecipeItemsNestedInput_schema_1.ItemUpdateOneRequiredWithoutRecipeItemsNestedInputObjectSchema).optional()
}).strict();
