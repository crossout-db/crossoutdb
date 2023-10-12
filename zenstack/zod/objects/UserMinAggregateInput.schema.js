"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMinAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.UserMinAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), name: zod_1.z.literal(true).optional(), role: zod_1.z.literal(true).optional(), email: zod_1.z.literal(true).optional(), emailVerified: zod_1.z.literal(true).optional(), image: zod_1.z.literal(true).optional()
}).strict();
