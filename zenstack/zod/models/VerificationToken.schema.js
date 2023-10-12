"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenUpdateSchema = exports.VerificationTokenCreateSchema = exports.VerificationTokenSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    identifier: zod_1.z.string(),
    token: zod_1.z.string(),
    expires: zod_1.z.date(),
});
exports.VerificationTokenSchema = baseSchema;
exports.VerificationTokenCreateSchema = baseSchema;
exports.VerificationTokenUpdateSchema = baseSchema.partial();
