"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCountOutputTypeArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCountOutputTypeSelect_schema_1 = require("./ItemCountOutputTypeSelect.schema");
exports.ItemCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => ItemCountOutputTypeSelect_schema_1.ItemCountOutputTypeSelectObjectSchema).optional()
}).strict();
