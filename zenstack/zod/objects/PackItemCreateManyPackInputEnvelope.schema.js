"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemCreateManyPackInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemCreateManyPackInput_schema_1 = require("./PackItemCreateManyPackInput.schema");
exports.PackItemCreateManyPackInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => PackItemCreateManyPackInput_schema_1.PackItemCreateManyPackInputObjectSchema),
        zod_1.z.lazy(() => PackItemCreateManyPackInput_schema_1.PackItemCreateManyPackInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
