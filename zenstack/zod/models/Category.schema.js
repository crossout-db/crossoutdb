"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateSchema = exports.CategoryCreateSchema = exports.CategorySchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
exports.CategorySchema = baseSchema;
exports.CategoryCreateSchema = baseSchema.partial({
    id: true,
});
exports.CategoryUpdateSchema = baseSchema.partial();
