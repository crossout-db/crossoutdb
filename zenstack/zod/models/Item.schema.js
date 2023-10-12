"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateSchema = exports.ItemCreateSchema = exports.ItemSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    marketDef: zod_1.z.string().nullish(),
    quantity: zod_1.z.number(),
    level: zod_1.z.number(),
    sellPriceMin: zod_1.z.number().nullish(),
    sellOrders: zod_1.z.number().nullish(),
    buyPriceMax: zod_1.z.number().nullish(),
    buyOrders: zod_1.z.number().nullish(),
    craftCost: zod_1.z.number().nullish(),
    timestamp: zod_1.z.date().nullish(),
    active: zod_1.z.boolean(),
    logId: zod_1.z.number().nullish(),
});
exports.ItemSchema = baseSchema.omit({
    marketDef: true,
});
exports.ItemCreateSchema = baseSchema.partial({
    id: true, timestamp: true,
});
exports.ItemUpdateSchema = baseSchema.partial();
