"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeCreateWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.BadgeExchangeCreateWithoutItemInputObjectSchema = zod_1.z.object({
    quantity: zod_1.z.number(), badges: zod_1.z.number(), active: zod_1.z.boolean(), timestamp: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()])
}).strict();
