"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountMinAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.AccountMinAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), userId: zod_1.z.literal(true).optional(), type: zod_1.z.literal(true).optional(), provider: zod_1.z.literal(true).optional(), providerAccountId: zod_1.z.literal(true).optional(), refresh_token: zod_1.z.literal(true).optional(), access_token: zod_1.z.literal(true).optional(), expires_at: zod_1.z.literal(true).optional(), token_type: zod_1.z.literal(true).optional(), scope: zod_1.z.literal(true).optional(), id_token: zod_1.z.literal(true).optional(), session_state: zod_1.z.literal(true).optional()
}).strict();
