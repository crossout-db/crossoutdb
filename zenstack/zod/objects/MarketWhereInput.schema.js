"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const FloatFilter_schema_1 = require("./FloatFilter.schema");
const FloatNullableFilter_schema_1 = require("./FloatNullableFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const ItemRelationFilter_schema_1 = require("./ItemRelationFilter.schema");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.MarketWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.MarketWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.MarketWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.MarketWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.MarketWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.MarketWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), itemId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), marketDef: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), sellPriceMin: zod_1.z.union([zod_1.z.lazy(() => FloatFilter_schema_1.FloatFilterObjectSchema),
        zod_1.z.number()]).optional(), sellOrders: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), buyPriceMax: zod_1.z.union([zod_1.z.lazy(() => FloatFilter_schema_1.FloatFilterObjectSchema),
        zod_1.z.number()]).optional(), buyOrders: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), craftCost: zod_1.z.union([zod_1.z.lazy(() => FloatNullableFilter_schema_1.FloatNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), item: zod_1.z.union([zod_1.z.lazy(() => ItemRelationFilter_schema_1.ItemRelationFilterObjectSchema),
        zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema)]).optional()
}).strict();
