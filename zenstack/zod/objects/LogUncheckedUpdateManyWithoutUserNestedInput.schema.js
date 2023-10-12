"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogUncheckedUpdateManyWithoutUserNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const LogCreateWithoutUserInput_schema_1 = require("./LogCreateWithoutUserInput.schema");
const LogUncheckedCreateWithoutUserInput_schema_1 = require("./LogUncheckedCreateWithoutUserInput.schema");
const LogCreateOrConnectWithoutUserInput_schema_1 = require("./LogCreateOrConnectWithoutUserInput.schema");
const LogUpsertWithWhereUniqueWithoutUserInput_schema_1 = require("./LogUpsertWithWhereUniqueWithoutUserInput.schema");
const LogCreateManyUserInputEnvelope_schema_1 = require("./LogCreateManyUserInputEnvelope.schema");
const LogWhereUniqueInput_schema_1 = require("./LogWhereUniqueInput.schema");
const LogUpdateWithWhereUniqueWithoutUserInput_schema_1 = require("./LogUpdateWithWhereUniqueWithoutUserInput.schema");
const LogUpdateManyWithWhereWithoutUserInput_schema_1 = require("./LogUpdateManyWithWhereWithoutUserInput.schema");
const LogScalarWhereInput_schema_1 = require("./LogScalarWhereInput.schema");
exports.LogUncheckedUpdateManyWithoutUserNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => LogCreateWithoutUserInput_schema_1.LogCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => LogCreateWithoutUserInput_schema_1.LogCreateWithoutUserInputObjectSchema).array(),
        zod_1.z.lazy(() => LogUncheckedCreateWithoutUserInput_schema_1.LogUncheckedCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => LogUncheckedCreateWithoutUserInput_schema_1.LogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => LogCreateOrConnectWithoutUserInput_schema_1.LogCreateOrConnectWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => LogCreateOrConnectWithoutUserInput_schema_1.LogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => LogUpsertWithWhereUniqueWithoutUserInput_schema_1.LogUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => LogUpsertWithWhereUniqueWithoutUserInput_schema_1.LogUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => LogCreateManyUserInputEnvelope_schema_1.LogCreateManyUserInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => LogWhereUniqueInput_schema_1.LogWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => LogWhereUniqueInput_schema_1.LogWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => LogWhereUniqueInput_schema_1.LogWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => LogWhereUniqueInput_schema_1.LogWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => LogWhereUniqueInput_schema_1.LogWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => LogWhereUniqueInput_schema_1.LogWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => LogWhereUniqueInput_schema_1.LogWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => LogWhereUniqueInput_schema_1.LogWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => LogUpdateWithWhereUniqueWithoutUserInput_schema_1.LogUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => LogUpdateWithWhereUniqueWithoutUserInput_schema_1.LogUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => LogUpdateManyWithWhereWithoutUserInput_schema_1.LogUpdateManyWithWhereWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => LogUpdateManyWithWhereWithoutUserInput_schema_1.LogUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => LogScalarWhereInput_schema_1.LogScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => LogScalarWhereInput_schema_1.LogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
