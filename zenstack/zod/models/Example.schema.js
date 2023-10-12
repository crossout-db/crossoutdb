"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleUpdateSchema = exports.ExampleCreateSchema = exports.ExampleSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.ExampleSchema = baseSchema;
exports.ExampleCreateSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true,
});
exports.ExampleUpdateSchema = baseSchema.partial();
