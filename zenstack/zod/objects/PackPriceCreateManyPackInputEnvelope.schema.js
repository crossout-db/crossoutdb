"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceCreateManyPackInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackPriceCreateManyPackInput_schema_1 = require("./PackPriceCreateManyPackInput.schema");
exports.PackPriceCreateManyPackInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => PackPriceCreateManyPackInput_schema_1.PackPriceCreateManyPackInputObjectSchema),
        zod_1.z.lazy(() => PackPriceCreateManyPackInput_schema_1.PackPriceCreateManyPackInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
