"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.VerificationTokenSelectObjectSchema = zod_1.z.object({
    identifier: zod_1.z.boolean().optional(), token: zod_1.z.boolean().optional(), expires: zod_1.z.boolean().optional()
}).strict();
