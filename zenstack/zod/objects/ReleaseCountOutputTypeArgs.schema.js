"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseCountOutputTypeArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseCountOutputTypeSelect_schema_1 = require("./ReleaseCountOutputTypeSelect.schema");
exports.ReleaseCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => ReleaseCountOutputTypeSelect_schema_1.ReleaseCountOutputTypeSelectObjectSchema).optional()
}).strict();
