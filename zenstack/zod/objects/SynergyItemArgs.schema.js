"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemSelect_schema_1 = require("./SynergyItemSelect.schema");
const SynergyItemInclude_schema_1 = require("./SynergyItemInclude.schema");
exports.SynergyItemArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => SynergyItemSelect_schema_1.SynergyItemSelectObjectSchema).optional(), include: zod_1.z.lazy(() => SynergyItemInclude_schema_1.SynergyItemIncludeObjectSchema).optional()
}).strict();
