"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemCountAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.PackItemCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), packId: zod_1.z.literal(true).optional(), itemId: zod_1.z.literal(true).optional(), quantity: zod_1.z.literal(true).optional(), _all: zod_1.z.literal(true).optional()
}).strict();
