"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RaritySelect_schema_1 = require("./RaritySelect.schema");
const RarityInclude_schema_1 = require("./RarityInclude.schema");
exports.RarityArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => RaritySelect_schema_1.RaritySelectObjectSchema).optional(), include: zod_1.z.lazy(() => RarityInclude_schema_1.RarityIncludeObjectSchema).optional()
}).strict();
