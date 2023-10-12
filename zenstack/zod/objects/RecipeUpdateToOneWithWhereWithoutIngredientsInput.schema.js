"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpdateToOneWithWhereWithoutIngredientsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeWhereInput_schema_1 = require("./RecipeWhereInput.schema");
const RecipeUpdateWithoutIngredientsInput_schema_1 = require("./RecipeUpdateWithoutIngredientsInput.schema");
const RecipeUncheckedUpdateWithoutIngredientsInput_schema_1 = require("./RecipeUncheckedUpdateWithoutIngredientsInput.schema");
exports.RecipeUpdateToOneWithWhereWithoutIngredientsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeWhereInput_schema_1.RecipeWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => RecipeUpdateWithoutIngredientsInput_schema_1.RecipeUpdateWithoutIngredientsInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedUpdateWithoutIngredientsInput_schema_1.RecipeUncheckedUpdateWithoutIngredientsInputObjectSchema)])
}).strict();
