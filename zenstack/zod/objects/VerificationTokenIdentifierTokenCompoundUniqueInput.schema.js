"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema = zod_1.z.object({
    identifier: zod_1.z.string(), token: zod_1.z.string()
}).strict();
