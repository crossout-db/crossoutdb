"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountScalarWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const IntNullableFilter_schema_1 = require("./IntNullableFilter.schema");
exports.AccountScalarWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.AccountScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.AccountScalarWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.AccountScalarWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.AccountScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.AccountScalarWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), userId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), type: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), provider: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), providerAccountId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), refresh_token: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), access_token: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), expires_at: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), token_type: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), scope: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), id_token: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), session_state: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable()
}).strict();
