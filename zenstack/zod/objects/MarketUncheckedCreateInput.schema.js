"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketUncheckedCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.MarketUncheckedCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), itemId: zod_1.z.number(), marketDef: zod_1.z.string(), sellPriceMin: zod_1.z.number(), sellOrders: zod_1.z.number(), buyPriceMax: zod_1.z.number(), buyOrders: zod_1.z.number(), craftCost: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()])
}).strict();