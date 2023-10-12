"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutItemStatsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const UserRole_schema_1 = require("../enums/UserRole.schema");
const EnumUserRoleFieldUpdateOperationsInput_schema_1 = require("./EnumUserRoleFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const AccountUpdateManyWithoutUserNestedInput_schema_1 = require("./AccountUpdateManyWithoutUserNestedInput.schema");
const SessionUpdateManyWithoutUserNestedInput_schema_1 = require("./SessionUpdateManyWithoutUserNestedInput.schema");
const LogUpdateManyWithoutUserNestedInput_schema_1 = require("./LogUpdateManyWithoutUserNestedInput.schema");
exports.UserUpdateWithoutItemStatsInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), role: zod_1.z.union([zod_1.z.lazy(() => UserRole_schema_1.UserRoleSchema),
        zod_1.z.lazy(() => EnumUserRoleFieldUpdateOperationsInput_schema_1.EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(), email: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), emailVerified: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), image: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), accounts: zod_1.z.lazy(() => AccountUpdateManyWithoutUserNestedInput_schema_1.AccountUpdateManyWithoutUserNestedInputObjectSchema).optional(), sessions: zod_1.z.lazy(() => SessionUpdateManyWithoutUserNestedInput_schema_1.SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(), log: zod_1.z.lazy(() => LogUpdateManyWithoutUserNestedInput_schema_1.LogUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
