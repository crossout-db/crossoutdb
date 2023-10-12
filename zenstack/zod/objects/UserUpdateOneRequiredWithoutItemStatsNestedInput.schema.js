"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutItemStatsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserCreateWithoutItemStatsInput_schema_1 = require("./UserCreateWithoutItemStatsInput.schema");
const UserUncheckedCreateWithoutItemStatsInput_schema_1 = require("./UserUncheckedCreateWithoutItemStatsInput.schema");
const UserCreateOrConnectWithoutItemStatsInput_schema_1 = require("./UserCreateOrConnectWithoutItemStatsInput.schema");
const UserUpsertWithoutItemStatsInput_schema_1 = require("./UserUpsertWithoutItemStatsInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const UserUpdateToOneWithWhereWithoutItemStatsInput_schema_1 = require("./UserUpdateToOneWithWhereWithoutItemStatsInput.schema");
const UserUpdateWithoutItemStatsInput_schema_1 = require("./UserUpdateWithoutItemStatsInput.schema");
const UserUncheckedUpdateWithoutItemStatsInput_schema_1 = require("./UserUncheckedUpdateWithoutItemStatsInput.schema");
exports.UserUpdateOneRequiredWithoutItemStatsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutItemStatsInput_schema_1.UserCreateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutItemStatsInput_schema_1.UserUncheckedCreateWithoutItemStatsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => UserCreateOrConnectWithoutItemStatsInput_schema_1.UserCreateOrConnectWithoutItemStatsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => UserUpsertWithoutItemStatsInput_schema_1.UserUpsertWithoutItemStatsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => UserUpdateToOneWithWhereWithoutItemStatsInput_schema_1.UserUpdateToOneWithWhereWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => UserUpdateWithoutItemStatsInput_schema_1.UserUpdateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutItemStatsInput_schema_1.UserUncheckedUpdateWithoutItemStatsInputObjectSchema)]).optional()
}).strict();
