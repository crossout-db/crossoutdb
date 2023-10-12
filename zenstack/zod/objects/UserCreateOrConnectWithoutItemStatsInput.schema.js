"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutItemStatsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const UserCreateWithoutItemStatsInput_schema_1 = require("./UserCreateWithoutItemStatsInput.schema");
const UserUncheckedCreateWithoutItemStatsInput_schema_1 = require("./UserUncheckedCreateWithoutItemStatsInput.schema");
exports.UserCreateOrConnectWithoutItemStatsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutItemStatsInput_schema_1.UserCreateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutItemStatsInput_schema_1.UserUncheckedCreateWithoutItemStatsInputObjectSchema)])
}).strict();
