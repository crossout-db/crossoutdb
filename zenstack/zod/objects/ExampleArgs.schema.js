"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ExampleSelect_schema_1 = require("./ExampleSelect.schema");
exports.ExampleArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => ExampleSelect_schema_1.ExampleSelectObjectSchema).optional()
}).strict();
