"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateSchema = exports.SessionCreateSchema = exports.SessionSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    sessionToken: zod_1.z.string(),
    expires: zod_1.z.date(),
});
exports.SessionSchema = baseSchema;
exports.SessionCreateSchema = baseSchema.partial({
    id: true,
});
exports.SessionUpdateSchema = baseSchema.partial();
