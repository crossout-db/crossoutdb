"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateNestedOneWithoutIngredientsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeCreateWithoutIngredientsInput_schema_1 = require("./RecipeCreateWithoutIngredientsInput.schema");
const RecipeUncheckedCreateWithoutIngredientsInput_schema_1 = require("./RecipeUncheckedCreateWithoutIngredientsInput.schema");
const RecipeCreateOrConnectWithoutIngredientsInput_schema_1 = require("./RecipeCreateOrConnectWithoutIngredientsInput.schema");
const RecipeWhereUniqueInput_schema_1 = require("./RecipeWhereUniqueInput.schema");
exports.RecipeCreateNestedOneWithoutIngredientsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateWithoutIngredientsInput_schema_1.RecipeCreateWithoutIngredientsInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedCreateWithoutIngredientsInput_schema_1.RecipeUncheckedCreateWithoutIngredientsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => RecipeCreateOrConnectWithoutIngredientsInput_schema_1.RecipeCreateOrConnectWithoutIngredientsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => RecipeWhereUniqueInput_schema_1.RecipeWhereUniqueInputObjectSchema).optional()
}).strict();
