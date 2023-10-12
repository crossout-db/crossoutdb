"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceCreateManyPackInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.PackPriceCreateManyPackInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), timestamp: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), priceUSD: zod_1.z.number(), priceEUR: zod_1.z.number(), priceGBP: zod_1.z.number(), priceRUB: zod_1.z.number(), discount: zod_1.z.number()
}).strict();
