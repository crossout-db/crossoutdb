"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketScalarWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const FloatFilter_schema_1 = require("./FloatFilter.schema");
const FloatNullableFilter_schema_1 = require("./FloatNullableFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
exports.MarketScalarWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.MarketScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.MarketScalarWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.MarketScalarWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.MarketScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.MarketScalarWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), itemId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), marketDef: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), sellPriceMin: zod_1.z.union([zod_1.z.lazy(() => FloatFilter_schema_1.FloatFilterObjectSchema),
        zod_1.z.number()]).optional(), sellOrders: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), buyPriceMax: zod_1.z.union([zod_1.z.lazy(() => FloatFilter_schema_1.FloatFilterObjectSchema),
        zod_1.z.number()]).optional(), buyOrders: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), craftCost: zod_1.z.union([zod_1.z.lazy(() => FloatNullableFilter_schema_1.FloatNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional()
}).strict();
