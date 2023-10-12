"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemCreateManyItemInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemCreateManyItemInput_schema_1 = require("./RecipeItemCreateManyItemInput.schema");
exports.RecipeItemCreateManyItemInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => RecipeItemCreateManyItemInput_schema_1.RecipeItemCreateManyItemInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemCreateManyItemInput_schema_1.RecipeItemCreateManyItemInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
