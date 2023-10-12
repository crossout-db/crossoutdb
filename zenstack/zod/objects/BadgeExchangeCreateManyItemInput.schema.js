"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeCreateManyItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.BadgeExchangeCreateManyItemInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), quantity: zod_1.z.number(), badges: zod_1.z.number(), active: zod_1.z.boolean(), timestamp: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()])
}).strict();
