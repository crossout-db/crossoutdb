"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const EnumUserRoleFilter_schema_1 = require("./EnumUserRoleFilter.schema");
const UserRole_schema_1 = require("../enums/UserRole.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const AccountListRelationFilter_schema_1 = require("./AccountListRelationFilter.schema");
const SessionListRelationFilter_schema_1 = require("./SessionListRelationFilter.schema");
const ItemStatsListRelationFilter_schema_1 = require("./ItemStatsListRelationFilter.schema");
const LogListRelationFilter_schema_1 = require("./LogListRelationFilter.schema");
exports.UserWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.UserWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.UserWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.UserWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.UserWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.UserWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), name: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), role: zod_1.z.union([zod_1.z.lazy(() => EnumUserRoleFilter_schema_1.EnumUserRoleFilterObjectSchema),
        zod_1.z.lazy(() => UserRole_schema_1.UserRoleSchema)]).optional(), email: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), emailVerified: zod_1.z.union([zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), image: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), accounts: zod_1.z.lazy(() => AccountListRelationFilter_schema_1.AccountListRelationFilterObjectSchema).optional(), sessions: zod_1.z.lazy(() => SessionListRelationFilter_schema_1.SessionListRelationFilterObjectSchema).optional(), itemStats: zod_1.z.lazy(() => ItemStatsListRelationFilter_schema_1.ItemStatsListRelationFilterObjectSchema).optional(), log: zod_1.z.lazy(() => LogListRelationFilter_schema_1.LogListRelationFilterObjectSchema).optional()
}).strict();