"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateManyResultInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeCreateManyResultInput_schema_1 = require("./RecipeCreateManyResultInput.schema");
exports.RecipeCreateManyResultInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => RecipeCreateManyResultInput_schema_1.RecipeCreateManyResultInputObjectSchema),
        zod_1.z.lazy(() => RecipeCreateManyResultInput_schema_1.RecipeCreateManyResultInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
