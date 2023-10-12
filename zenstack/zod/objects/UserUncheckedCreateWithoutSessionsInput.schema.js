"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedCreateWithoutSessionsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserRole_schema_1 = require("../enums/UserRole.schema");
const AccountUncheckedCreateNestedManyWithoutUserInput_schema_1 = require("./AccountUncheckedCreateNestedManyWithoutUserInput.schema");
const ItemStatsUncheckedCreateNestedManyWithoutUserInput_schema_1 = require("./ItemStatsUncheckedCreateNestedManyWithoutUserInput.schema");
const LogUncheckedCreateNestedManyWithoutUserInput_schema_1 = require("./LogUncheckedCreateNestedManyWithoutUserInput.schema");
exports.UserUncheckedCreateWithoutSessionsInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), role: zod_1.z.lazy(() => UserRole_schema_1.UserRoleSchema).optional(), email: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), emailVerified: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), image: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), accounts: zod_1.z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInput_schema_1.AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(), itemStats: zod_1.z.lazy(() => ItemStatsUncheckedCreateNestedManyWithoutUserInput_schema_1.ItemStatsUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(), log: zod_1.z.lazy(() => LogUncheckedCreateNestedManyWithoutUserInput_schema_1.LogUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
