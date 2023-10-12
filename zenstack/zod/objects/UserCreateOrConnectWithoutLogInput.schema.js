"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutLogInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const UserCreateWithoutLogInput_schema_1 = require("./UserCreateWithoutLogInput.schema");
const UserUncheckedCreateWithoutLogInput_schema_1 = require("./UserUncheckedCreateWithoutLogInput.schema");
exports.UserCreateOrConnectWithoutLogInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutLogInput_schema_1.UserCreateWithoutLogInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutLogInput_schema_1.UserUncheckedCreateWithoutLogInputObjectSchema)])
}).strict();
