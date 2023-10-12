"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemAvgAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SynergyItemAvgAggregateInputObjectSchema = zod_1.z.object({
    synergyId: zod_1.z.literal(true).optional(), itemId: zod_1.z.literal(true).optional()
}).strict();
