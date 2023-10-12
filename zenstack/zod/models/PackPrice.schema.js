"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceUpdateSchema = exports.PackPriceCreateSchema = exports.PackPriceSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    timestamp: zod_1.z.date(),
    priceUSD: zod_1.z.number(),
    priceEUR: zod_1.z.number(),
    priceGBP: zod_1.z.number(),
    priceRUB: zod_1.z.number(),
    discount: zod_1.z.number(),
});
exports.PackPriceSchema = baseSchema;
exports.PackPriceCreateSchema = baseSchema.partial({
    id: true, timestamp: true,
});
exports.PackPriceUpdateSchema = baseSchema.partial();
