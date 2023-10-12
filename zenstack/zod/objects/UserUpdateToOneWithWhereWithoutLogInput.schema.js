"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutLogInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
const UserUpdateWithoutLogInput_schema_1 = require("./UserUpdateWithoutLogInput.schema");
const UserUncheckedUpdateWithoutLogInput_schema_1 = require("./UserUncheckedUpdateWithoutLogInput.schema");
exports.UserUpdateToOneWithWhereWithoutLogInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => UserUpdateWithoutLogInput_schema_1.UserUpdateWithoutLogInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutLogInput_schema_1.UserUncheckedUpdateWithoutLogInputObjectSchema)])
}).strict();
