"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyWhereInput_schema_1 = require("./SynergyWhereInput.schema");
exports.SynergyRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => SynergyWhereInput_schema_1.SynergyWhereInputObjectSchema).optional(), isNot: zod_1.z.lazy(() => SynergyWhereInput_schema_1.SynergyWhereInputObjectSchema).optional()
}).strict();
