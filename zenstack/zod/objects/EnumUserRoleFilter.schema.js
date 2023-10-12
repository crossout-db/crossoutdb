"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserRoleFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserRole_schema_1 = require("../enums/UserRole.schema");
const NestedEnumUserRoleFilter_schema_1 = require("./NestedEnumUserRoleFilter.schema");
exports.EnumUserRoleFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => UserRole_schema_1.UserRoleSchema).optional(), in: zod_1.z.lazy(() => UserRole_schema_1.UserRoleSchema).array().optional(), notIn: zod_1.z.lazy(() => UserRole_schema_1.UserRoleSchema).array().optional(), not: zod_1.z.union([zod_1.z.lazy(() => UserRole_schema_1.UserRoleSchema),
        zod_1.z.lazy(() => NestedEnumUserRoleFilter_schema_1.NestedEnumUserRoleFilterObjectSchema)]).optional()
}).strict();
