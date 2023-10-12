"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergySelect_schema_1 = require("./SynergySelect.schema");
const SynergyInclude_schema_1 = require("./SynergyInclude.schema");
exports.SynergyArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => SynergySelect_schema_1.SynergySelectObjectSchema).optional(), include: zod_1.z.lazy(() => SynergyInclude_schema_1.SynergyIncludeObjectSchema).optional()
}).strict();
