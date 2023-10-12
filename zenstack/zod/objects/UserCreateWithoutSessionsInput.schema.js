"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutSessionsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserRole_schema_1 = require("../enums/UserRole.schema");
const AccountCreateNestedManyWithoutUserInput_schema_1 = require("./AccountCreateNestedManyWithoutUserInput.schema");
const ItemStatsCreateNestedManyWithoutUserInput_schema_1 = require("./ItemStatsCreateNestedManyWithoutUserInput.schema");
const LogCreateNestedManyWithoutUserInput_schema_1 = require("./LogCreateNestedManyWithoutUserInput.schema");
exports.UserCreateWithoutSessionsInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), role: zod_1.z.lazy(() => UserRole_schema_1.UserRoleSchema).optional(), email: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), emailVerified: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), image: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), accounts: zod_1.z.lazy(() => AccountCreateNestedManyWithoutUserInput_schema_1.AccountCreateNestedManyWithoutUserInputObjectSchema).optional(), itemStats: zod_1.z.lazy(() => ItemStatsCreateNestedManyWithoutUserInput_schema_1.ItemStatsCreateNestedManyWithoutUserInputObjectSchema).optional(), log: zod_1.z.lazy(() => LogCreateNestedManyWithoutUserInput_schema_1.LogCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
