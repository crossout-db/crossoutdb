"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const LogSelect_schema_1 = require("./LogSelect.schema");
const LogInclude_schema_1 = require("./LogInclude.schema");
exports.LogArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => LogSelect_schema_1.LogSelectObjectSchema).optional(), include: zod_1.z.lazy(() => LogInclude_schema_1.LogIncludeObjectSchema).optional()
}).strict();
