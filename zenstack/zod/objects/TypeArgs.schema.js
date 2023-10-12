"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const TypeSelect_schema_1 = require("./TypeSelect.schema");
const TypeInclude_schema_1 = require("./TypeInclude.schema");
exports.TypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => TypeSelect_schema_1.TypeSelectObjectSchema).optional(), include: zod_1.z.lazy(() => TypeInclude_schema_1.TypeIncludeObjectSchema).optional()
}).strict();
