"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackMaxAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.PackMaxAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), name: zod_1.z.literal(true).optional(), description: zod_1.z.literal(true).optional(), steamAppID: zod_1.z.literal(true).optional(), key: zod_1.z.literal(true).optional(), coins: zod_1.z.literal(true).optional(), releaseId: zod_1.z.literal(true).optional(), active: zod_1.z.literal(true).optional()
}).strict();
