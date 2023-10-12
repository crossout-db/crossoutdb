"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemIncludeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackArgs_schema_1 = require("./PackArgs.schema");
const ItemArgs_schema_1 = require("./ItemArgs.schema");
exports.PackItemIncludeObjectSchema = zod_1.z.object({
    pack: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PackArgs_schema_1.PackArgsObjectSchema)]).optional(), item: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemArgs_schema_1.ItemArgsObjectSchema)]).optional()
}).strict();
