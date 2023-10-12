"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCountOutputTypeArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const CategoryCountOutputTypeSelect_schema_1 = require("./CategoryCountOutputTypeSelect.schema");
exports.CategoryCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => CategoryCountOutputTypeSelect_schema_1.CategoryCountOutputTypeSelectObjectSchema).optional()
}).strict();
