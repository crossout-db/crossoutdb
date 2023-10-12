"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenMinAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.VerificationTokenMinAggregateInputObjectSchema = zod_1.z.object({
    identifier: zod_1.z.literal(true).optional(), token: zod_1.z.literal(true).optional(), expires: zod_1.z.literal(true).optional()
}).strict();
