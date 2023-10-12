"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateWithoutIngredientsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateNestedOneWithoutRecipesInput_schema_1 = require("./ItemCreateNestedOneWithoutRecipesInput.schema");
const ReleaseCreateNestedOneWithoutRecipesInput_schema_1 = require("./ReleaseCreateNestedOneWithoutRecipesInput.schema");
exports.RecipeCreateWithoutIngredientsInputObjectSchema = zod_1.z.object({
    quantity: zod_1.z.number(), craftCost: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.boolean(), result: zod_1.z.lazy(() => ItemCreateNestedOneWithoutRecipesInput_schema_1.ItemCreateNestedOneWithoutRecipesInputObjectSchema), release: zod_1.z.lazy(() => ReleaseCreateNestedOneWithoutRecipesInput_schema_1.ReleaseCreateNestedOneWithoutRecipesInputObjectSchema).optional()
}).strict();
