"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceCountAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.PackPriceCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), packId: zod_1.z.literal(true).optional(), timestamp: zod_1.z.literal(true).optional(), priceUSD: zod_1.z.literal(true).optional(), priceEUR: zod_1.z.literal(true).optional(), priceGBP: zod_1.z.literal(true).optional(), priceRUB: zod_1.z.literal(true).optional(), discount: zod_1.z.literal(true).optional(), _all: zod_1.z.literal(true).optional()
}).strict();
