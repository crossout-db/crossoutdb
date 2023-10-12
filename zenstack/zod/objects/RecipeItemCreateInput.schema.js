"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeCreateNestedOneWithoutIngredientsInput_schema_1 = require("./RecipeCreateNestedOneWithoutIngredientsInput.schema");
const ItemCreateNestedOneWithoutRecipeItemsInput_schema_1 = require("./ItemCreateNestedOneWithoutRecipeItemsInput.schema");
exports.RecipeItemCreateInputObjectSchema = zod_1.z.object({
    quantity: zod_1.z.number(), recipe: zod_1.z.lazy(() => RecipeCreateNestedOneWithoutIngredientsInput_schema_1.RecipeCreateNestedOneWithoutIngredientsInputObjectSchema), item: zod_1.z.lazy(() => ItemCreateNestedOneWithoutRecipeItemsInput_schema_1.ItemCreateNestedOneWithoutRecipeItemsInputObjectSchema)
}).strict();
