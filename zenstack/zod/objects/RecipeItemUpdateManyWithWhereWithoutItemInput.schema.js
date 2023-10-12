"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemUpdateManyWithWhereWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemScalarWhereInput_schema_1 = require("./RecipeItemScalarWhereInput.schema");
const RecipeItemUpdateManyMutationInput_schema_1 = require("./RecipeItemUpdateManyMutationInput.schema");
const RecipeItemUncheckedUpdateManyWithoutItemInput_schema_1 = require("./RecipeItemUncheckedUpdateManyWithoutItemInput.schema");
exports.RecipeItemUpdateManyWithWhereWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeItemScalarWhereInput_schema_1.RecipeItemScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => RecipeItemUpdateManyMutationInput_schema_1.RecipeItemUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUncheckedUpdateManyWithoutItemInput_schema_1.RecipeItemUncheckedUpdateManyWithoutItemInputObjectSchema)])
}).strict();
