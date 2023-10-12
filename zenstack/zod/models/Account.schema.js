"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateSchema = exports.AccountCreateSchema = exports.AccountSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    type: zod_1.z.string(),
    provider: zod_1.z.string(),
    providerAccountId: zod_1.z.string(),
    refresh_token: zod_1.z.string().nullish(),
    access_token: zod_1.z.string().nullish(),
    expires_at: zod_1.z.number().nullish(),
    token_type: zod_1.z.string().nullish(),
    scope: zod_1.z.string().nullish(),
    id_token: zod_1.z.string().nullish(),
    session_state: zod_1.z.string().nullish(),
});
exports.AccountSchema = baseSchema;
exports.AccountCreateSchema = baseSchema.partial({
    id: true,
});
exports.AccountUpdateSchema = baseSchema.partial();
