"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemSelect_schema_1 = require("./ItemSelect.schema");
const ItemInclude_schema_1 = require("./ItemInclude.schema");
exports.ItemArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => ItemSelect_schema_1.ItemSelectObjectSchema).optional(), include: zod_1.z.lazy(() => ItemInclude_schema_1.ItemIncludeObjectSchema).optional()
}).strict();
