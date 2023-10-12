"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemArgs_schema_1 = require("./ItemArgs.schema");
exports.MarketSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), item: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemArgs_schema_1.ItemArgsObjectSchema)]).optional(), itemId: zod_1.z.boolean().optional(), marketDef: zod_1.z.boolean().optional(), sellPriceMin: zod_1.z.boolean().optional(), sellOrders: zod_1.z.boolean().optional(), buyPriceMax: zod_1.z.boolean().optional(), buyOrders: zod_1.z.boolean().optional(), craftCost: zod_1.z.boolean().optional(), timestamp: zod_1.z.boolean().optional()
}).strict();
