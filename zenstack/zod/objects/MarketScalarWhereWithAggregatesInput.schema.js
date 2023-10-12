"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketScalarWhereWithAggregatesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const FloatWithAggregatesFilter_schema_1 = require("./FloatWithAggregatesFilter.schema");
const FloatNullableWithAggregatesFilter_schema_1 = require("./FloatNullableWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
exports.MarketScalarWhereWithAggregatesInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.MarketScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.MarketScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.MarketScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.MarketScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.MarketScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), itemId: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), marketDef: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), sellPriceMin: zod_1.z.union([zod_1.z.lazy(() => FloatWithAggregatesFilter_schema_1.FloatWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), sellOrders: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), buyPriceMax: zod_1.z.union([zod_1.z.lazy(() => FloatWithAggregatesFilter_schema_1.FloatWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), buyOrders: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), craftCost: zod_1.z.union([zod_1.z.lazy(() => FloatNullableWithAggregatesFilter_schema_1.FloatNullableWithAggregatesFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional()
}).strict();
