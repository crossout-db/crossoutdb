"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityCountOutputTypeArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RarityCountOutputTypeSelect_schema_1 = require("./RarityCountOutputTypeSelect.schema");
exports.RarityCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => RarityCountOutputTypeSelect_schema_1.RarityCountOutputTypeSelectObjectSchema).optional()
}).strict();
