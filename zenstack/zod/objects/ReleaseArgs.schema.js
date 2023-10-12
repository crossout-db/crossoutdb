"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseSelect_schema_1 = require("./ReleaseSelect.schema");
const ReleaseInclude_schema_1 = require("./ReleaseInclude.schema");
exports.ReleaseArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => ReleaseSelect_schema_1.ReleaseSelectObjectSchema).optional(), include: zod_1.z.lazy(() => ReleaseInclude_schema_1.ReleaseIncludeObjectSchema).optional()
}).strict();
