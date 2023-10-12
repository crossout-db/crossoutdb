"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemSumAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SynergyItemSumAggregateInputObjectSchema = zod_1.z.object({
    synergyId: zod_1.z.literal(true).optional(), itemId: zod_1.z.literal(true).optional()
}).strict();
