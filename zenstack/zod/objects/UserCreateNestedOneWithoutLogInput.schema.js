"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutLogInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserCreateWithoutLogInput_schema_1 = require("./UserCreateWithoutLogInput.schema");
const UserUncheckedCreateWithoutLogInput_schema_1 = require("./UserUncheckedCreateWithoutLogInput.schema");
const UserCreateOrConnectWithoutLogInput_schema_1 = require("./UserCreateOrConnectWithoutLogInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
exports.UserCreateNestedOneWithoutLogInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutLogInput_schema_1.UserCreateWithoutLogInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutLogInput_schema_1.UserUncheckedCreateWithoutLogInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => UserCreateOrConnectWithoutLogInput_schema_1.UserCreateOrConnectWithoutLogInputObjectSchema).optional(), connect: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema).optional()
}).strict();
