"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatNullableWithAggregatesFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const NestedFloatNullableWithAggregatesFilter_schema_1 = require("./NestedFloatNullableWithAggregatesFilter.schema");
const NestedIntNullableFilter_schema_1 = require("./NestedIntNullableFilter.schema");
const NestedFloatNullableFilter_schema_1 = require("./NestedFloatNullableFilter.schema");
exports.FloatNullableWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), in: zod_1.z.union([zod_1.z.number().array(),
        zod_1.z.null()]).optional().nullable(), notIn: zod_1.z.union([zod_1.z.number().array(),
        zod_1.z.null()]).optional().nullable(), lt: zod_1.z.number().optional(), lte: zod_1.z.number().optional(), gt: zod_1.z.number().optional(), gte: zod_1.z.number().optional(), not: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NestedFloatNullableWithAggregatesFilter_schema_1.NestedFloatNullableWithAggregatesFilterObjectSchema),
        zod_1.z.null()]).optional().nullable(), _count: zod_1.z.lazy(() => NestedIntNullableFilter_schema_1.NestedIntNullableFilterObjectSchema).optional(), _avg: zod_1.z.lazy(() => NestedFloatNullableFilter_schema_1.NestedFloatNullableFilterObjectSchema).optional(), _sum: zod_1.z.lazy(() => NestedFloatNullableFilter_schema_1.NestedFloatNullableFilterObjectSchema).optional(), _min: zod_1.z.lazy(() => NestedFloatNullableFilter_schema_1.NestedFloatNullableFilterObjectSchema).optional(), _max: zod_1.z.lazy(() => NestedFloatNullableFilter_schema_1.NestedFloatNullableFilterObjectSchema).optional()
}).strict();
