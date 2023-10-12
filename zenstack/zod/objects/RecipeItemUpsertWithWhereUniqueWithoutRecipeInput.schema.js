"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemUpsertWithWhereUniqueWithoutRecipeInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemWhereUniqueInput_schema_1 = require("./RecipeItemWhereUniqueInput.schema");
const RecipeItemUpdateWithoutRecipeInput_schema_1 = require("./RecipeItemUpdateWithoutRecipeInput.schema");
const RecipeItemUncheckedUpdateWithoutRecipeInput_schema_1 = require("./RecipeItemUncheckedUpdateWithoutRecipeInput.schema");
const RecipeItemCreateWithoutRecipeInput_schema_1 = require("./RecipeItemCreateWithoutRecipeInput.schema");
const RecipeItemUncheckedCreateWithoutRecipeInput_schema_1 = require("./RecipeItemUncheckedCreateWithoutRecipeInput.schema");
exports.RecipeItemUpsertWithWhereUniqueWithoutRecipeInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => RecipeItemUpdateWithoutRecipeInput_schema_1.RecipeItemUpdateWithoutRecipeInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUncheckedUpdateWithoutRecipeInput_schema_1.RecipeItemUncheckedUpdateWithoutRecipeInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => RecipeItemCreateWithoutRecipeInput_schema_1.RecipeItemCreateWithoutRecipeInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUncheckedCreateWithoutRecipeInput_schema_1.RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema)])
}).strict();
