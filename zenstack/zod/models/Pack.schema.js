"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUpdateSchema = exports.PackCreateSchema = exports.PackSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    description: zod_1.z.string().nullish(),
    steamAppID: zod_1.z.number(),
    key: zod_1.z.string().nullish(),
    coins: zod_1.z.number(),
    active: zod_1.z.boolean(),
});
exports.PackSchema = baseSchema;
exports.PackCreateSchema = baseSchema.partial({
    id: true,
});
exports.PackUpdateSchema = baseSchema.partial();
