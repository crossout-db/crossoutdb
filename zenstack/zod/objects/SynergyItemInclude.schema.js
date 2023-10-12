"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemIncludeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyArgs_schema_1 = require("./SynergyArgs.schema");
const ItemArgs_schema_1 = require("./ItemArgs.schema");
exports.SynergyItemIncludeObjectSchema = zod_1.z.object({
    synergy: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => SynergyArgs_schema_1.SynergyArgsObjectSchema)]).optional(), item: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemArgs_schema_1.ItemArgsObjectSchema)]).optional()
}).strict();
