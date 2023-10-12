"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionAvgAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.FactionAvgAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional()
}).strict();
