"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateManyReleaseInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeCreateManyReleaseInput_schema_1 = require("./RecipeCreateManyReleaseInput.schema");
exports.RecipeCreateManyReleaseInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateManyReleaseInput_schema_1.RecipeCreateManyReleaseInputObjectSchema),
        zod_1.z.lazy(() => RecipeCreateManyReleaseInput_schema_1.RecipeCreateManyReleaseInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
