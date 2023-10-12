"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemCreateWithoutRecipeInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateNestedOneWithoutRecipeItemsInput_schema_1 = require("./ItemCreateNestedOneWithoutRecipeItemsInput.schema");
exports.RecipeItemCreateWithoutRecipeInputObjectSchema = zod_1.z.object({
    quantity: zod_1.z.number(), item: zod_1.z.lazy(() => ItemCreateNestedOneWithoutRecipeItemsInput_schema_1.ItemCreateNestedOneWithoutRecipeItemsInputObjectSchema)
}).strict();
