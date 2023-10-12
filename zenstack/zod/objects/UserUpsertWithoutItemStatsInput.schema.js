"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutItemStatsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserUpdateWithoutItemStatsInput_schema_1 = require("./UserUpdateWithoutItemStatsInput.schema");
const UserUncheckedUpdateWithoutItemStatsInput_schema_1 = require("./UserUncheckedUpdateWithoutItemStatsInput.schema");
const UserCreateWithoutItemStatsInput_schema_1 = require("./UserCreateWithoutItemStatsInput.schema");
const UserUncheckedCreateWithoutItemStatsInput_schema_1 = require("./UserUncheckedCreateWithoutItemStatsInput.schema");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
exports.UserUpsertWithoutItemStatsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => UserUpdateWithoutItemStatsInput_schema_1.UserUpdateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutItemStatsInput_schema_1.UserUncheckedUpdateWithoutItemStatsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutItemStatsInput_schema_1.UserCreateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutItemStatsInput_schema_1.UserUncheckedCreateWithoutItemStatsInputObjectSchema)]), where: zod_1.z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema).optional()
}).strict();
