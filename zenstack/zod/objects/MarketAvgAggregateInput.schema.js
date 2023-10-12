"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketAvgAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.MarketAvgAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), itemId: zod_1.z.literal(true).optional(), sellPriceMin: zod_1.z.literal(true).optional(), sellOrders: zod_1.z.literal(true).optional(), buyPriceMax: zod_1.z.literal(true).optional(), buyOrders: zod_1.z.literal(true).optional(), craftCost: zod_1.z.literal(true).optional()
}).strict();
