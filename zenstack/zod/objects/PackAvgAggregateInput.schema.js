"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackAvgAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.PackAvgAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), steamAppID: zod_1.z.literal(true).optional(), coins: zod_1.z.literal(true).optional(), releaseId: zod_1.z.literal(true).optional()
}).strict();
