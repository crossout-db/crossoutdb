"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const ItemStatsListRelationFilter_schema_1 = require("./ItemStatsListRelationFilter.schema");
const RecipeListRelationFilter_schema_1 = require("./RecipeListRelationFilter.schema");
const PackListRelationFilter_schema_1 = require("./PackListRelationFilter.schema");
exports.ReleaseWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ReleaseWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ReleaseWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.ReleaseWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ReleaseWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ReleaseWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), name: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), xoVersion: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), build: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), description: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), battlePass: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), url: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), startDate: zod_1.z.union([zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), endDate: zod_1.z.union([zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), itemStats: zod_1.z.lazy(() => ItemStatsListRelationFilter_schema_1.ItemStatsListRelationFilterObjectSchema).optional(), recipes: zod_1.z.lazy(() => RecipeListRelationFilter_schema_1.RecipeListRelationFilterObjectSchema).optional(), packs: zod_1.z.lazy(() => PackListRelationFilter_schema_1.PackListRelationFilterObjectSchema).optional()
}).strict();
