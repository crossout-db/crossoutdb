"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseMaxAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.ReleaseMaxAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), name: zod_1.z.literal(true).optional(), xoVersion: zod_1.z.literal(true).optional(), build: zod_1.z.literal(true).optional(), description: zod_1.z.literal(true).optional(), battlePass: zod_1.z.literal(true).optional(), url: zod_1.z.literal(true).optional(), startDate: zod_1.z.literal(true).optional(), endDate: zod_1.z.literal(true).optional(), active: zod_1.z.literal(true).optional()
}).strict();
