"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionMaxAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SessionMaxAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), sessionToken: zod_1.z.literal(true).optional(), userId: zod_1.z.literal(true).optional(), expires: zod_1.z.literal(true).optional()
}).strict();