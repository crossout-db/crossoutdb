"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateOrConnectWithoutIngredientsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeWhereUniqueInput_schema_1 = require("./RecipeWhereUniqueInput.schema");
const RecipeCreateWithoutIngredientsInput_schema_1 = require("./RecipeCreateWithoutIngredientsInput.schema");
const RecipeUncheckedCreateWithoutIngredientsInput_schema_1 = require("./RecipeUncheckedCreateWithoutIngredientsInput.schema");
exports.RecipeCreateOrConnectWithoutIngredientsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateWithoutIngredientsInput_schema_1.RecipeCreateWithoutIngredientsInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutIngredientsInput_schema_1.RecipeUncheckedCreateWithoutIngredientsInputObjectSchema)])
}).strict();
