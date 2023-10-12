"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.ExampleCreateInputObjectSchema = zod_1.z.object({
    name: zod_1.z.string(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()])
}).strict();
