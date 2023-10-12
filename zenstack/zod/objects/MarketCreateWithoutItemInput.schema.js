"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketCreateWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.MarketCreateWithoutItemInputObjectSchema = zod_1.z.object({
    marketDef: zod_1.z.string(), sellPriceMin: zod_1.z.number(), sellOrders: zod_1.z.number(), buyPriceMax: zod_1.z.number(), buyOrders: zod_1.z.number(), craftCost: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()])
}).strict();
