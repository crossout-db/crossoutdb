"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketCountAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.MarketCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), itemId: zod_1.z.literal(true).optional(), marketDef: zod_1.z.literal(true).optional(), sellPriceMin: zod_1.z.literal(true).optional(), sellOrders: zod_1.z.literal(true).optional(), buyPriceMax: zod_1.z.literal(true).optional(), buyOrders: zod_1.z.literal(true).optional(), craftCost: zod_1.z.literal(true).optional(), timestamp: zod_1.z.literal(true).optional(), _all: zod_1.z.literal(true).optional()
}).strict();
