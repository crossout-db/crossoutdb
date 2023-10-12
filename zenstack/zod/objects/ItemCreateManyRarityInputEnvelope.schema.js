"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateManyRarityInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateManyRarityInput_schema_1 = require("./ItemCreateManyRarityInput.schema");
exports.ItemCreateManyRarityInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => ItemCreateManyRarityInput_schema_1.ItemCreateManyRarityInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateManyRarityInput_schema_1.ItemCreateManyRarityInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
