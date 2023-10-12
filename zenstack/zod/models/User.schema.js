"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateSchema = exports.UserCreateSchema = exports.UserSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserRole_schema_1 = require("../enums/UserRole.schema");
const baseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().nullish(),
    role: UserRole_schema_1.UserRoleSchema,
    email: zod_1.z.string().nullish(),
    emailVerified: zod_1.z.date().nullish(),
    image: zod_1.z.string().nullish(),
});
exports.UserSchema = baseSchema;
exports.UserCreateSchema = baseSchema.partial({
    id: true, role: true,
});
exports.UserUpdateSchema = baseSchema.partial();
