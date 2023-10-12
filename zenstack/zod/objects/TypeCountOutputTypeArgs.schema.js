"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeCountOutputTypeArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const TypeCountOutputTypeSelect_schema_1 = require("./TypeCountOutputTypeSelect.schema");
exports.TypeCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => TypeCountOutputTypeSelect_schema_1.TypeCountOutputTypeSelectObjectSchema).optional()
}).strict();
