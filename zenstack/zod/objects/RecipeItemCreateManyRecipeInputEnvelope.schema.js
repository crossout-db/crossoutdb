"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemCreateManyRecipeInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemCreateManyRecipeInput_schema_1 = require("./RecipeItemCreateManyRecipeInput.schema");
exports.RecipeItemCreateManyRecipeInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => RecipeItemCreateManyRecipeInput_schema_1.RecipeItemCreateManyRecipeInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemCreateManyRecipeInput_schema_1.RecipeItemCreateManyRecipeInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
