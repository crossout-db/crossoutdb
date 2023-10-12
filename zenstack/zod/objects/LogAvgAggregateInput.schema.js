"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogAvgAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.LogAvgAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), recordId: zod_1.z.literal(true).optional()
}).strict();
