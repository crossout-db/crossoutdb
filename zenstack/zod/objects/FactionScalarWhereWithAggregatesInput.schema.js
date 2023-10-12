"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionScalarWhereWithAggregatesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
exports.FactionScalarWhereWithAggregatesInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.FactionScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.FactionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.FactionScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.FactionScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.FactionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), name: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional()
}).strict();
