"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackSumAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.PackSumAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), steamAppID: zod_1.z.literal(true).optional(), coins: zod_1.z.literal(true).optional(), releaseId: zod_1.z.literal(true).optional()
}).strict();
