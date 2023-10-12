"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenUncheckedCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.VerificationTokenUncheckedCreateInputObjectSchema = zod_1.z.object({
    identifier: zod_1.z.string(), token: zod_1.z.string(), expires: zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime()])
}).strict();