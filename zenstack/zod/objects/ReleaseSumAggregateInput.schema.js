"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseSumAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.ReleaseSumAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional()
}).strict();
