"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCreateWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const JsonNullValueInput_schema_1 = require("../enums/JsonNullValueInput.schema");
const literalSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]);
const jsonSchema = zod_1.z.lazy(() => zod_1.z.union([literalSchema, zod_1.z.array(jsonSchema.nullable()), zod_1.z.record(jsonSchema.nullable())]));
exports.LogCreateWithoutUserInputObjectSchema = zod_1.z.object({
    timestamp: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), tableChanged: zod_1.z.string(), recordId: zod_1.z.number(), record: zod_1.z.union([zod_1.z.lazy(() => JsonNullValueInput_schema_1.JsonNullValueInputSchema),
        jsonSchema])
}).strict();