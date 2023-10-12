"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemMinAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SynergyItemMinAggregateInputObjectSchema = zod_1.z.object({
    synergyId: zod_1.z.literal(true).optional(), itemId: zod_1.z.literal(true).optional()
}).strict();
