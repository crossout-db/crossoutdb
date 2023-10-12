"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenMaxAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.VerificationTokenMaxAggregateInputObjectSchema = zod_1.z.object({
    identifier: zod_1.z.literal(true).optional(), token: zod_1.z.literal(true).optional(), expires: zod_1.z.literal(true).optional()
}).strict();
