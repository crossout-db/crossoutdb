"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpdateManyWithWhereWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeScalarWhereInput_schema_1 = require("./RecipeScalarWhereInput.schema");
const RecipeUpdateManyMutationInput_schema_1 = require("./RecipeUpdateManyMutationInput.schema");
const RecipeUncheckedUpdateManyWithoutReleaseInput_schema_1 = require("./RecipeUncheckedUpdateManyWithoutReleaseInput.schema");
exports.RecipeUpdateManyWithWhereWithoutReleaseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => RecipeScalarWhereInput_schema_1.RecipeScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => RecipeUpdateManyMutationInput_schema_1.RecipeUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => RecipeUncheckedUpdateManyWithoutReleaseInput_schema_1.RecipeUncheckedUpdateManyWithoutReleaseInputObjectSchema)])
}).strict();
