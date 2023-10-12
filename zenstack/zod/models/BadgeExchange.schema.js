"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeUpdateSchema = exports.BadgeExchangeCreateSchema = exports.BadgeExchangeSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    quantity: zod_1.z.number(),
    badges: zod_1.z.number(),
    active: zod_1.z.boolean(),
    timestamp: zod_1.z.date(),
});
exports.BadgeExchangeSchema = baseSchema;
exports.BadgeExchangeCreateSchema = baseSchema.partial({
    id: true, timestamp: true,
});
exports.BadgeExchangeUpdateSchema = baseSchema.partial();
