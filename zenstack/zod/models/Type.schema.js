"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeUpdateSchema = exports.TypeCreateSchema = exports.TypeSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
exports.TypeSchema = baseSchema;
exports.TypeCreateSchema = baseSchema.partial({
    id: true,
});
exports.TypeUpdateSchema = baseSchema.partial();
