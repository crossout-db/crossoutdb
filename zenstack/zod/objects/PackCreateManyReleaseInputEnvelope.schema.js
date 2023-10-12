"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackCreateManyReleaseInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackCreateManyReleaseInput_schema_1 = require("./PackCreateManyReleaseInput.schema");
exports.PackCreateManyReleaseInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => PackCreateManyReleaseInput_schema_1.PackCreateManyReleaseInputObjectSchema),
        zod_1.z.lazy(() => PackCreateManyReleaseInput_schema_1.PackCreateManyReleaseInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
