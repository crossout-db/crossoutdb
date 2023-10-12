"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemCreateManyItemInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemCreateManyItemInput_schema_1 = require("./PackItemCreateManyItemInput.schema");
exports.PackItemCreateManyItemInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => PackItemCreateManyItemInput_schema_1.PackItemCreateManyItemInputObjectSchema),
        zod_1.z.lazy(() => PackItemCreateManyItemInput_schema_1.PackItemCreateManyItemInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
