"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCreateNestedManyWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const LogCreateWithoutUserInput_schema_1 = require("./LogCreateWithoutUserInput.schema");
const LogUncheckedCreateWithoutUserInput_schema_1 = require("./LogUncheckedCreateWithoutUserInput.schema");
const LogCreateOrConnectWithoutUserInput_schema_1 = require("./LogCreateOrConnectWithoutUserInput.schema");
const LogCreateManyUserInputEnvelope_schema_1 = require("./LogCreateManyUserInputEnvelope.schema");
const LogWhereUniqueInput_schema_1 = require("./LogWhereUniqueInput.schema");
exports.LogCreateNestedManyWithoutUserInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => LogCreateWithoutUserInput_schema_1.LogCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => LogCreateWithoutUserInput_schema_1.LogCreateWithoutUserInputObjectSchema).array(),
        zod_1.z.lazy(() => LogUncheckedCreateWithoutUserInput_schema_1.LogUncheckedCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => LogUncheckedCreateWithoutUserInput_schema_1.LogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => LogCreateOrConnectWithoutUserInput_schema_1.LogCreateOrConnectWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => LogCreateOrConnectWithoutUserInput_schema_1.LogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => LogCreateManyUserInputEnvelope_schema_1.LogCreateManyUserInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => LogWhereUniqueInput_schema_1.LogWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => LogWhereUniqueInput_schema_1.LogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
