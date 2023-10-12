"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackSelect_schema_1 = require("./PackSelect.schema");
const PackInclude_schema_1 = require("./PackInclude.schema");
exports.PackArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => PackSelect_schema_1.PackSelectObjectSchema).optional(), include: zod_1.z.lazy(() => PackInclude_schema_1.PackIncludeObjectSchema).optional()
}).strict();
