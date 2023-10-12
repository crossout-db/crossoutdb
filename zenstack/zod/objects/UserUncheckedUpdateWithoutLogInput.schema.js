"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedUpdateWithoutLogInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const UserRole_schema_1 = require("../enums/UserRole.schema");
const EnumUserRoleFieldUpdateOperationsInput_schema_1 = require("./EnumUserRoleFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const AccountUncheckedUpdateManyWithoutUserNestedInput_schema_1 = require("./AccountUncheckedUpdateManyWithoutUserNestedInput.schema");
const SessionUncheckedUpdateManyWithoutUserNestedInput_schema_1 = require("./SessionUncheckedUpdateManyWithoutUserNestedInput.schema");
const ItemStatsUncheckedUpdateManyWithoutUserNestedInput_schema_1 = require("./ItemStatsUncheckedUpdateManyWithoutUserNestedInput.schema");
exports.UserUncheckedUpdateWithoutLogInputObjectSchema = zod_1.z.object({
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
        zod_1.z.null()]).optional().nullable(), accounts: zod_1.z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInput_schema_1.AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(), sessions: zod_1.z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInput_schema_1.SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(), itemStats: zod_1.z.lazy(() => ItemStatsUncheckedUpdateManyWithoutUserNestedInput_schema_1.ItemStatsUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
