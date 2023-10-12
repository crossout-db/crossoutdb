"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemCreateOrConnectWithoutRecipeInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemWhereUniqueInput_schema_1 = require("./RecipeItemWhereUniqueInput.schema");
const RecipeItemCreateWithoutRecipeInput_schema_1 = require("./RecipeItemCreateWithoutRecipeInput.schema");
const RecipeItemUncheckedCreateWithoutRecipeInput_schema_1 = require("./RecipeItemUncheckedCreateWithoutRecipeInput.schema");
exports.RecipeItemCreateOrConnectWithoutRecipeInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => RecipeItemCreateWithoutRecipeInput_schema_1.RecipeItemCreateWithoutRecipeInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUncheckedCreateWithoutRecipeInput_schema_1.RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema)])
}).strict();
