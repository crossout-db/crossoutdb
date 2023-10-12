"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutItemStatsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
const UserUpdateWithoutItemStatsInput_schema_1 = require("./UserUpdateWithoutItemStatsInput.schema");
const UserUncheckedUpdateWithoutItemStatsInput_schema_1 = require("./UserUncheckedUpdateWithoutItemStatsInput.schema");
exports.UserUpdateToOneWithWhereWithoutItemStatsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => UserUpdateWithoutItemStatsInput_schema_1.UserUpdateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutItemStatsInput_schema_1.UserUncheckedUpdateWithoutItemStatsInputObjectSchema)])
}).strict();
