"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const FactionSelect_schema_1 = require("./FactionSelect.schema");
const FactionInclude_schema_1 = require("./FactionInclude.schema");
exports.FactionArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => FactionSelect_schema_1.FactionSelectObjectSchema).optional(), include: zod_1.z.lazy(() => FactionInclude_schema_1.FactionIncludeObjectSchema).optional()
}).strict();
