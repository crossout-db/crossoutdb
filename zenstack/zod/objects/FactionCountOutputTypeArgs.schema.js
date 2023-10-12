"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionCountOutputTypeArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const FactionCountOutputTypeSelect_schema_1 = require("./FactionCountOutputTypeSelect.schema");
exports.FactionCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => FactionCountOutputTypeSelect_schema_1.FactionCountOutputTypeSelectObjectSchema).optional()
}).strict();
