"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemCreateWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeCreateNestedOneWithoutIngredientsInput_schema_1 = require("./RecipeCreateNestedOneWithoutIngredientsInput.schema");
exports.RecipeItemCreateWithoutItemInputObjectSchema = zod_1.z.object({
    quantity: zod_1.z.number(), recipe: zod_1.z.lazy(() => RecipeCreateNestedOneWithoutIngredientsInput_schema_1.RecipeCreateNestedOneWithoutIngredientsInputObjectSchema)
}).strict();
