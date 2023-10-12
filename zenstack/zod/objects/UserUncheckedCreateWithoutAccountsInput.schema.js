"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedCreateWithoutAccountsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserRole_schema_1 = require("../enums/UserRole.schema");
const SessionUncheckedCreateNestedManyWithoutUserInput_schema_1 = require("./SessionUncheckedCreateNestedManyWithoutUserInput.schema");
const ItemStatsUncheckedCreateNestedManyWithoutUserInput_schema_1 = require("./ItemStatsUncheckedCreateNestedManyWithoutUserInput.schema");
const LogUncheckedCreateNestedManyWithoutUserInput_schema_1 = require("./LogUncheckedCreateNestedManyWithoutUserInput.schema");
exports.UserUncheckedCreateWithoutAccountsInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), role: zod_1.z.lazy(() => UserRole_schema_1.UserRoleSchema).optional(), email: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), emailVerified: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), image: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), sessions: zod_1.z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInput_schema_1.SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(), itemStats: zod_1.z.lazy(() => ItemStatsUncheckedCreateNestedManyWithoutUserInput_schema_1.ItemStatsUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(), log: zod_1.z.lazy(() => LogUncheckedCreateNestedManyWithoutUserInput_schema_1.LogUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
