"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutLogInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserUpdateWithoutLogInput_schema_1 = require("./UserUpdateWithoutLogInput.schema");
const UserUncheckedUpdateWithoutLogInput_schema_1 = require("./UserUncheckedUpdateWithoutLogInput.schema");
const UserCreateWithoutLogInput_schema_1 = require("./UserCreateWithoutLogInput.schema");
const UserUncheckedCreateWithoutLogInput_schema_1 = require("./UserUncheckedCreateWithoutLogInput.schema");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
exports.UserUpsertWithoutLogInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => UserUpdateWithoutLogInput_schema_1.UserUpdateWithoutLogInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutLogInput_schema_1.UserUncheckedUpdateWithoutLogInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutLogInput_schema_1.UserCreateWithoutLogInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutLogInput_schema_1.UserUncheckedCreateWithoutLogInputObjectSchema)]), where: zod_1.z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema).optional()
}).strict();
