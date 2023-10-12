"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyAvgAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SynergyAvgAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional()
}).strict();
