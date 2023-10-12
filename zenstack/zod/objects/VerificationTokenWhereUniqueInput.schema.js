"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const VerificationTokenIdentifierTokenCompoundUniqueInput_schema_1 = require("./VerificationTokenIdentifierTokenCompoundUniqueInput.schema");
const VerificationTokenWhereInput_schema_1 = require("./VerificationTokenWhereInput.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
exports.VerificationTokenWhereUniqueInputObjectSchema = zod_1.z.object({
    token: zod_1.z.string().optional(), identifier_token: zod_1.z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInput_schema_1.VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema).optional(), AND: zod_1.z.union([zod_1.z.lazy(() => VerificationTokenWhereInput_schema_1.VerificationTokenWhereInputObjectSchema),
        zod_1.z.lazy(() => VerificationTokenWhereInput_schema_1.VerificationTokenWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => VerificationTokenWhereInput_schema_1.VerificationTokenWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => VerificationTokenWhereInput_schema_1.VerificationTokenWhereInputObjectSchema),
        zod_1.z.lazy(() => VerificationTokenWhereInput_schema_1.VerificationTokenWhereInputObjectSchema).array()]).optional(), identifier: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), expires: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional()
}).strict();
