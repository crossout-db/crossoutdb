"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatWithAggregatesFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const NestedFloatWithAggregatesFilter_schema_1 = require("./NestedFloatWithAggregatesFilter.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedFloatFilter_schema_1 = require("./NestedFloatFilter.schema");
exports.FloatWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(), in: zod_1.z.number().array().optional(), notIn: zod_1.z.number().array().optional(), lt: zod_1.z.number().optional(), lte: zod_1.z.number().optional(), gt: zod_1.z.number().optional(), gte: zod_1.z.number().optional(), not: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NestedFloatWithAggregatesFilter_schema_1.NestedFloatWithAggregatesFilterObjectSchema)]).optional(), _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(), _avg: zod_1.z.lazy(() => NestedFloatFilter_schema_1.NestedFloatFilterObjectSchema).optional(), _sum: zod_1.z.lazy(() => NestedFloatFilter_schema_1.NestedFloatFilterObjectSchema).optional(), _min: zod_1.z.lazy(() => NestedFloatFilter_schema_1.NestedFloatFilterObjectSchema).optional(), _max: zod_1.z.lazy(() => NestedFloatFilter_schema_1.NestedFloatFilterObjectSchema).optional()
}).strict();
