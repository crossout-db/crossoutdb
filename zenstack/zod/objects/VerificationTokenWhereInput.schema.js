"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
exports.VerificationTokenWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.VerificationTokenWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.VerificationTokenWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.VerificationTokenWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.VerificationTokenWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.VerificationTokenWhereInputObjectSchema).array()]).optional(), identifier: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), token: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), expires: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional()
}).strict();
