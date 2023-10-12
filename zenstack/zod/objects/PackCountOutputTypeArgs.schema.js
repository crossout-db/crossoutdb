"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackCountOutputTypeArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackCountOutputTypeSelect_schema_1 = require("./PackCountOutputTypeSelect.schema");
exports.PackCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => PackCountOutputTypeSelect_schema_1.PackCountOutputTypeSelectObjectSchema).optional()
}).strict();
