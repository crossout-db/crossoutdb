"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpdateManyWithWhereWithoutResultInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeScalarWhereInput_schema_1 = require("./RecipeScalarWhereInput.schema");
const RecipeUpdateManyMutationInput_schema_1 = require("./RecipeUpdateManyMutationInput.schema");
const RecipeUncheckedUpdateManyWithoutResultInput_schema_1 = require("./RecipeUncheckedUpdateManyWithoutResultInput.schema");
exports.RecipeUpdateManyWithWhereWithoutResultInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeScalarWhereInput_schema_1.RecipeScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => RecipeUpdateManyMutationInput_schema_1.RecipeUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedUpdateManyWithoutResultInput_schema_1.RecipeUncheckedUpdateManyWithoutResultInputObjectSchema)])
}).strict();
