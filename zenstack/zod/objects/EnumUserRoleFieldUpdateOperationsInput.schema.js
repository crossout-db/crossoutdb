"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserRoleFieldUpdateOperationsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserRole_schema_1 = require("../enums/UserRole.schema");
exports.EnumUserRoleFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.lazy(() => UserRole_schema_1.UserRoleSchema).optional()
}).strict();
