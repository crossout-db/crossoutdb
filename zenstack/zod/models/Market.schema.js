"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketUpdateSchema = exports.MarketCreateSchema = exports.MarketSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    marketDef: zod_1.z.string(),
    sellPriceMin: zod_1.z.number(),
    sellOrders: zod_1.z.number(),
    buyPriceMax: zod_1.z.number(),
    buyOrders: zod_1.z.number(),
    craftCost: zod_1.z.number().nullish(),
    timestamp: zod_1.z.date(),
});
exports.MarketSchema = baseSchema;
exports.MarketCreateSchema = baseSchema.partial({
    id: true, timestamp: true,
});
exports.MarketUpdateSchema = baseSchema.partial();
