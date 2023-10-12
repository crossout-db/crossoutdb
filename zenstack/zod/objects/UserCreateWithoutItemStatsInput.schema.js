"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutItemStatsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserRole_schema_1 = require("../enums/UserRole.schema");
const AccountCreateNestedManyWithoutUserInput_schema_1 = require("./AccountCreateNestedManyWithoutUserInput.schema");
const SessionCreateNestedManyWithoutUserInput_schema_1 = require("./SessionCreateNestedManyWithoutUserInput.schema");
const LogCreateNestedManyWithoutUserInput_schema_1 = require("./LogCreateNestedManyWithoutUserInput.schema");
exports.UserCreateWithoutItemStatsInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), role: zod_1.z.lazy(() => UserRole_schema_1.UserRoleSchema).optional(), email: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), emailVerified: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), image: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), accounts: zod_1.z.lazy(() => AccountCreateNestedManyWithoutUserInput_schema_1.AccountCreateNestedManyWithoutUserInputObjectSchema).optional(), sessions: zod_1.z.lazy(() => SessionCreateNestedManyWithoutUserInput_schema_1.SessionCreateNestedManyWithoutUserInputObjectSchema).optional(), log: zod_1.z.lazy(() => LogCreateNestedManyWithoutUserInput_schema_1.LogCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
