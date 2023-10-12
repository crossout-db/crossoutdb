"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyArgs_schema_1 = require("./SynergyArgs.schema");
const ItemArgs_schema_1 = require("./ItemArgs.schema");
exports.SynergyItemSelectObjectSchema = zod_1.z.object({
    synergy: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => SynergyArgs_schema_1.SynergyArgsObjectSchema)]).optional(), synergyId: zod_1.z.boolean().optional(), item: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemArgs_schema_1.ItemArgsObjectSchema)]).optional(), itemId: zod_1.z.boolean().optional()
}).strict();
