"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedFloatNullableFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.NestedFloatNullableFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), in: zod_1.z.union([zod_1.z.number().array(),
        zod_1.z.null()]).optional().nullable(), notIn: zod_1.z.union([zod_1.z.number().array(),
        zod_1.z.null()]).optional().nullable(), lt: zod_1.z.number().optional(), lte: zod_1.z.number().optional(), gt: zod_1.z.number().optional(), gte: zod_1.z.number().optional(), not: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => exports.NestedFloatNullableFilterObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
