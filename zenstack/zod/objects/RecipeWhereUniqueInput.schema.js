"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeWhereInput_schema_1 = require("./RecipeWhereInput.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const IntNullableFilter_schema_1 = require("./IntNullableFilter.schema");
const FloatNullableFilter_schema_1 = require("./FloatNullableFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const ItemRelationFilter_schema_1 = require("./ItemRelationFilter.schema");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
const ReleaseNullableRelationFilter_schema_1 = require("./ReleaseNullableRelationFilter.schema");
const ReleaseWhereInput_schema_1 = require("./ReleaseWhereInput.schema");
const RecipeItemListRelationFilter_schema_1 = require("./RecipeItemListRelationFilter.schema");
exports.RecipeWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => RecipeWhereInput_schema_1.RecipeWhereInputObjectSchema),
        zod_1.z.lazy(() => RecipeWhereInput_schema_1.RecipeWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => RecipeWhereInput_schema_1.RecipeWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => RecipeWhereInput_schema_1.RecipeWhereInputObjectSchema),
        zod_1.z.lazy(() => RecipeWhereInput_schema_1.RecipeWhereInputObjectSchema).array()]).optional(), resultItemId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), quantity: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), releaseId: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), craftCost: zod_1.z.union([zod_1.z.lazy(() => FloatNullableFilter_schema_1.FloatNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), result: zod_1.z.union([zod_1.z.lazy(() => ItemRelationFilter_schema_1.ItemRelationFilterObjectSchema),
        zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema)]).optional(), release: zod_1.z.union([zod_1.z.lazy(() => ReleaseNullableRelationFilter_schema_1.ReleaseNullableRelationFilterObjectSchema),
        zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), ingredients: zod_1.z.lazy(() => RecipeItemListRelationFilter_schema_1.RecipeItemListRelationFilterObjectSchema).optional()
}).strict();
