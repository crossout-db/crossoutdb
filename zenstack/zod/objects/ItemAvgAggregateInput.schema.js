"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAvgAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.ItemAvgAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), quantity: zod_1.z.literal(true).optional(), typeId: zod_1.z.literal(true).optional(), categoryId: zod_1.z.literal(true).optional(), factionId: zod_1.z.literal(true).optional(), rarityId: zod_1.z.literal(true).optional(), level: zod_1.z.literal(true).optional(), sellPriceMin: zod_1.z.literal(true).optional(), sellOrders: zod_1.z.literal(true).optional(), buyPriceMax: zod_1.z.literal(true).optional(), buyOrders: zod_1.z.literal(true).optional(), craftCost: zod_1.z.literal(true).optional(), logId: zod_1.z.literal(true).optional()
}).strict();
