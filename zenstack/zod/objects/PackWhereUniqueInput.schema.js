"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackWhereInput_schema_1 = require("./PackWhereInput.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const IntNullableFilter_schema_1 = require("./IntNullableFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const ReleaseNullableRelationFilter_schema_1 = require("./ReleaseNullableRelationFilter.schema");
const ReleaseWhereInput_schema_1 = require("./ReleaseWhereInput.schema");
const PackItemListRelationFilter_schema_1 = require("./PackItemListRelationFilter.schema");
const PackPriceListRelationFilter_schema_1 = require("./PackPriceListRelationFilter.schema");
exports.PackWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), steamAppID: zod_1.z.number().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema),
        zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema),
        zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema).array()]).optional(), name: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), description: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), key: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), coins: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), releaseId: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), release: zod_1.z.union([zod_1.z.lazy(() => ReleaseNullableRelationFilter_schema_1.ReleaseNullableRelationFilterObjectSchema),
        zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), items: zod_1.z.lazy(() => PackItemListRelationFilter_schema_1.PackItemListRelationFilterObjectSchema).optional(), packPrices: zod_1.z.lazy(() => PackPriceListRelationFilter_schema_1.PackPriceListRelationFilterObjectSchema).optional()
}).strict();
