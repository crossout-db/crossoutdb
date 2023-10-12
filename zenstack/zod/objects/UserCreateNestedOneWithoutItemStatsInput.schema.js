"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutItemStatsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserCreateWithoutItemStatsInput_schema_1 = require("./UserCreateWithoutItemStatsInput.schema");
const UserUncheckedCreateWithoutItemStatsInput_schema_1 = require("./UserUncheckedCreateWithoutItemStatsInput.schema");
const UserCreateOrConnectWithoutItemStatsInput_schema_1 = require("./UserCreateOrConnectWithoutItemStatsInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
exports.UserCreateNestedOneWithoutItemStatsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutItemStatsInput_schema_1.UserCreateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutItemStatsInput_schema_1.UserUncheckedCreateWithoutItemStatsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => UserCreateOrConnectWithoutItemStatsInput_schema_1.UserCreateOrConnectWithoutItemStatsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema).optional()
}).strict();
