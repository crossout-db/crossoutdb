"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseCreateNestedOneWithoutPacksInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseCreateWithoutPacksInput_schema_1 = require("./ReleaseCreateWithoutPacksInput.schema");
const ReleaseUncheckedCreateWithoutPacksInput_schema_1 = require("./ReleaseUncheckedCreateWithoutPacksInput.schema");
const ReleaseCreateOrConnectWithoutPacksInput_schema_1 = require("./ReleaseCreateOrConnectWithoutPacksInput.schema");
const ReleaseWhereUniqueInput_schema_1 = require("./ReleaseWhereUniqueInput.schema");
exports.ReleaseCreateNestedOneWithoutPacksInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ReleaseCreateWithoutPacksInput_schema_1.ReleaseCreateWithoutPacksInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedCreateWithoutPacksInput_schema_1.ReleaseUncheckedCreateWithoutPacksInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ReleaseCreateOrConnectWithoutPacksInput_schema_1.ReleaseCreateOrConnectWithoutPacksInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ReleaseWhereUniqueInput_schema_1.ReleaseWhereUniqueInputObjectSchema).optional()
}).strict();
