"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutLogNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserCreateWithoutLogInput_schema_1 = require("./UserCreateWithoutLogInput.schema");
const UserUncheckedCreateWithoutLogInput_schema_1 = require("./UserUncheckedCreateWithoutLogInput.schema");
const UserCreateOrConnectWithoutLogInput_schema_1 = require("./UserCreateOrConnectWithoutLogInput.schema");
const UserUpsertWithoutLogInput_schema_1 = require("./UserUpsertWithoutLogInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const UserUpdateToOneWithWhereWithoutLogInput_schema_1 = require("./UserUpdateToOneWithWhereWithoutLogInput.schema");
const UserUpdateWithoutLogInput_schema_1 = require("./UserUpdateWithoutLogInput.schema");
const UserUncheckedUpdateWithoutLogInput_schema_1 = require("./UserUncheckedUpdateWithoutLogInput.schema");
exports.UserUpdateOneRequiredWithoutLogNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutLogInput_schema_1.UserCreateWithoutLogInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutLogInput_schema_1.UserUncheckedCreateWithoutLogInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => UserCreateOrConnectWithoutLogInput_schema_1.UserCreateOrConnectWithoutLogInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => UserUpsertWithoutLogInput_schema_1.UserUpsertWithoutLogInputObjectSchema).optional(), connect: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => UserUpdateToOneWithWhereWithoutLogInput_schema_1.UserUpdateToOneWithWhereWithoutLogInputObjectSchema),
        zod_1.z.lazy(() => UserUpdateWithoutLogInput_schema_1.UserUpdateWithoutLogInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutLogInput_schema_1.UserUncheckedUpdateWithoutLogInputObjectSchema)]).optional()
}).strict();
