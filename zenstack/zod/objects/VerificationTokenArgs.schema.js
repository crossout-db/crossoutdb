"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const VerificationTokenSelect_schema_1 = require("./VerificationTokenSelect.schema");
exports.VerificationTokenArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => VerificationTokenSelect_schema_1.VerificationTokenSelectObjectSchema).optional()
}).strict();
