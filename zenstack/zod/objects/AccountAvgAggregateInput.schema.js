"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAvgAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.AccountAvgAggregateInputObjectSchema = zod_1.z.object({
    expires_at: zod_1.z.literal(true).optional()
}).strict();
