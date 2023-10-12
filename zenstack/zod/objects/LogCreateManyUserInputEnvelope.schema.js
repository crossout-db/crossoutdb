"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCreateManyUserInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const LogCreateManyUserInput_schema_1 = require("./LogCreateManyUserInput.schema");
exports.LogCreateManyUserInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => LogCreateManyUserInput_schema_1.LogCreateManyUserInputObjectSchema),
        zod_1.z.lazy(() => LogCreateManyUserInput_schema_1.LogCreateManyUserInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
