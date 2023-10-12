"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemScalarWhereWithAggregatesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const StringNullableWithAggregatesFilter_schema_1 = require("./StringNullableWithAggregatesFilter.schema");
const FloatNullableWithAggregatesFilter_schema_1 = require("./FloatNullableWithAggregatesFilter.schema");
const IntNullableWithAggregatesFilter_schema_1 = require("./IntNullableWithAggregatesFilter.schema");
const DateTimeNullableWithAggregatesFilter_schema_1 = require("./DateTimeNullableWithAggregatesFilter.schema");
const BoolWithAggregatesFilter_schema_1 = require("./BoolWithAggregatesFilter.schema");
exports.ItemScalarWhereWithAggregatesInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ItemScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.ItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.ItemScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ItemScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.ItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), name: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), marketDef: zod_1.z.union([zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), quantity: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), typeId: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), categoryId: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), factionId: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), rarityId: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), level: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), sellPriceMin: zod_1.z.union([zod_1.z.lazy(() => FloatNullableWithAggregatesFilter_schema_1.FloatNullableWithAggregatesFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), sellOrders: zod_1.z.union([zod_1.z.lazy(() => IntNullableWithAggregatesFilter_schema_1.IntNullableWithAggregatesFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), buyPriceMax: zod_1.z.union([zod_1.z.lazy(() => FloatNullableWithAggregatesFilter_schema_1.FloatNullableWithAggregatesFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), buyOrders: zod_1.z.union([zod_1.z.lazy(() => IntNullableWithAggregatesFilter_schema_1.IntNullableWithAggregatesFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), craftCost: zod_1.z.union([zod_1.z.lazy(() => FloatNullableWithAggregatesFilter_schema_1.FloatNullableWithAggregatesFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.lazy(() => DateTimeNullableWithAggregatesFilter_schema_1.DateTimeNullableWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.union([zod_1.z.lazy(() => BoolWithAggregatesFilter_schema_1.BoolWithAggregatesFilterObjectSchema),
        zod_1.z.boolean()]).optional(), logId: zod_1.z.union([zod_1.z.lazy(() => IntNullableWithAggregatesFilter_schema_1.IntNullableWithAggregatesFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable()
}).strict();
