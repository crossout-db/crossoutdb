"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleCountAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.ExampleCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), name: zod_1.z.literal(true).optional(), createdAt: zod_1.z.literal(true).optional(), updatedAt: zod_1.z.literal(true).optional(), _all: zod_1.z.literal(true).optional()
}).strict();
