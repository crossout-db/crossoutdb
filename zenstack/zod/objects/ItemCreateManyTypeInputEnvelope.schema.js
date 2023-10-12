"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateManyTypeInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateManyTypeInput_schema_1 = require("./ItemCreateManyTypeInput.schema");
exports.ItemCreateManyTypeInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => ItemCreateManyTypeInput_schema_1.ItemCreateManyTypeInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateManyTypeInput_schema_1.ItemCreateManyTypeInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
