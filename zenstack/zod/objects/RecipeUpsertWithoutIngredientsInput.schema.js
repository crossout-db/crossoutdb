"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpsertWithoutIngredientsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeUpdateWithoutIngredientsInput_schema_1 = require("./RecipeUpdateWithoutIngredientsInput.schema");
const RecipeUncheckedUpdateWithoutIngredientsInput_schema_1 = require("./RecipeUncheckedUpdateWithoutIngredientsInput.schema");
const RecipeCreateWithoutIngredientsInput_schema_1 = require("./RecipeCreateWithoutIngredientsInput.schema");
const RecipeUncheckedCreateWithoutIngredientsInput_schema_1 = require("./RecipeUncheckedCreateWithoutIngredientsInput.schema");
const RecipeWhereInput_schema_1 = require("./RecipeWhereInput.schema");
exports.RecipeUpsertWithoutIngredientsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => RecipeUpdateWithoutIngredientsInput_schema_1.RecipeUpdateWithoutIngredientsInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedUpdateWithoutIngredientsInput_schema_1.RecipeUncheckedUpdateWithoutIngredientsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateWithoutIngredientsInput_schema_1.RecipeCreateWithoutIngredientsInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutIngredientsInput_schema_1.RecipeUncheckedCreateWithoutIngredientsInputObjectSchema)]), where: zod_1.z.lazy(() => RecipeWhereInput_schema_1.RecipeWhereInputObjectSchema).optional()
}).strict();
