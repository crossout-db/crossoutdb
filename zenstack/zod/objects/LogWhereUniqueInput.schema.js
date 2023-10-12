"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const LogWhereInput_schema_1 = require("./LogWhereInput.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const JsonFilter_schema_1 = require("./JsonFilter.schema");
const UserRelationFilter_schema_1 = require("./UserRelationFilter.schema");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
exports.LogWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => LogWhereInput_schema_1.LogWhereInputObjectSchema),
        zod_1.z.lazy(() => LogWhereInput_schema_1.LogWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => LogWhereInput_schema_1.LogWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => LogWhereInput_schema_1.LogWhereInputObjectSchema),
        zod_1.z.lazy(() => LogWhereInput_schema_1.LogWhereInputObjectSchema).array()]).optional(), timestamp: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), userId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), tableChanged: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), recordId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), record: zod_1.z.lazy(() => JsonFilter_schema_1.JsonFilterObjectSchema).optional(), user: zod_1.z.union([zod_1.z.lazy(() => UserRelationFilter_schema_1.UserRelationFilterObjectSchema),
        zod_1.z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema)]).optional()
}).strict();