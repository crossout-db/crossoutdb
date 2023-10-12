"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ExampleWhereInput_schema_1 = require("./ExampleWhereInput.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
exports.ExampleWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => ExampleWhereInput_schema_1.ExampleWhereInputObjectSchema),
        zod_1.z.lazy(() => ExampleWhereInput_schema_1.ExampleWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => ExampleWhereInput_schema_1.ExampleWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => ExampleWhereInput_schema_1.ExampleWhereInputObjectSchema),
        zod_1.z.lazy(() => ExampleWhereInput_schema_1.ExampleWhereInputObjectSchema).array()]).optional(), name: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional()
}).strict();
