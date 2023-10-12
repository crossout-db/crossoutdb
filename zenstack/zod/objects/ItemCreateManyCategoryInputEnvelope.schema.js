"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateManyCategoryInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateManyCategoryInput_schema_1 = require("./ItemCreateManyCategoryInput.schema");
exports.ItemCreateManyCategoryInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => ItemCreateManyCategoryInput_schema_1.ItemCreateManyCategoryInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateManyCategoryInput_schema_1.ItemCreateManyCategoryInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
