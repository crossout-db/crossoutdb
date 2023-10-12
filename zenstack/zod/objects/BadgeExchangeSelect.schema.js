"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemArgs_schema_1 = require("./ItemArgs.schema");
exports.BadgeExchangeSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), item: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemArgs_schema_1.ItemArgsObjectSchema)]).optional(), itemId: zod_1.z.boolean().optional(), quantity: zod_1.z.boolean().optional(), badges: zod_1.z.boolean().optional(), active: zod_1.z.boolean().optional(), timestamp: zod_1.z.boolean().optional()
}).strict();
