"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemCreateManyItemInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemCreateManyItemInput_schema_1 = require("./SynergyItemCreateManyItemInput.schema");
exports.SynergyItemCreateManyItemInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => SynergyItemCreateManyItemInput_schema_1.SynergyItemCreateManyItemInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemCreateManyItemInput_schema_1.SynergyItemCreateManyItemInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
