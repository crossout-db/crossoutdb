"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemSelect_schema_1 = require("./PackItemSelect.schema");
const PackItemInclude_schema_1 = require("./PackItemInclude.schema");
exports.PackItemArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => PackItemSelect_schema_1.PackItemSelectObjectSchema).optional(), include: zod_1.z.lazy(() => PackItemInclude_schema_1.PackItemIncludeObjectSchema).optional()
}).strict();
