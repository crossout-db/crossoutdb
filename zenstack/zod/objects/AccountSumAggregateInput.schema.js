"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSumAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.AccountSumAggregateInputObjectSchema = zod_1.z.object({
    expires_at: zod_1.z.literal(true).optional()
}).strict();
