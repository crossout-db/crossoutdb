"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemUpdateManyWithWhereWithoutRecipeInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemScalarWhereInput_schema_1 = require("./RecipeItemScalarWhereInput.schema");
const RecipeItemUpdateManyMutationInput_schema_1 = require("./RecipeItemUpdateManyMutationInput.schema");
const RecipeItemUncheckedUpdateManyWithoutRecipeInput_schema_1 = require("./RecipeItemUncheckedUpdateManyWithoutRecipeInput.schema");
exports.RecipeItemUpdateManyWithWhereWithoutRecipeInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeItemScalarWhereInput_schema_1.RecipeItemScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => RecipeItemUpdateManyMutationInput_schema_1.RecipeItemUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUncheckedUpdateManyWithoutRecipeInput_schema_1.RecipeItemUncheckedUpdateManyWithoutRecipeInputObjectSchema)])
}).strict();
