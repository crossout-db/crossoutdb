"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeSumAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.TypeSumAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional()
}).strict();
