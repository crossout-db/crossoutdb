"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaritySumAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RaritySumAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), order: zod_1.z.literal(true).optional()
}).strict();
