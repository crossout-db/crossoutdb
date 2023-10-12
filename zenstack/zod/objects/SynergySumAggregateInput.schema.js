"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergySumAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SynergySumAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional()
}).strict();
