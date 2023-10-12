"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const CategorySelect_schema_1 = require("./CategorySelect.schema");
const CategoryInclude_schema_1 = require("./CategoryInclude.schema");
exports.CategoryArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => CategorySelect_schema_1.CategorySelectObjectSchema).optional(), include: zod_1.z.lazy(() => CategoryInclude_schema_1.CategoryIncludeObjectSchema).optional()
}).strict();
