"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemCreateManySynergyInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemCreateManySynergyInput_schema_1 = require("./SynergyItemCreateManySynergyInput.schema");
exports.SynergyItemCreateManySynergyInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => SynergyItemCreateManySynergyInput_schema_1.SynergyItemCreateManySynergyInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemCreateManySynergyInput_schema_1.SynergyItemCreateManySynergyInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
