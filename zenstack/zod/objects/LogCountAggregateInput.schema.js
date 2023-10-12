"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCountAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.LogCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), timestamp: zod_1.z.literal(true).optional(), userId: zod_1.z.literal(true).optional(), tableChanged: zod_1.z.literal(true).optional(), recordId: zod_1.z.literal(true).optional(), record: zod_1.z.literal(true).optional(), _all: zod_1.z.literal(true).optional()
}).strict();
