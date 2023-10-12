"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUncheckedCreateNestedManyWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackCreateWithoutReleaseInput_schema_1 = require("./PackCreateWithoutReleaseInput.schema");
const PackUncheckedCreateWithoutReleaseInput_schema_1 = require("./PackUncheckedCreateWithoutReleaseInput.schema");
const PackCreateOrConnectWithoutReleaseInput_schema_1 = require("./PackCreateOrConnectWithoutReleaseInput.schema");
const PackCreateManyReleaseInputEnvelope_schema_1 = require("./PackCreateManyReleaseInputEnvelope.schema");
const PackWhereUniqueInput_schema_1 = require("./PackWhereUniqueInput.schema");
exports.PackUncheckedCreateNestedManyWithoutReleaseInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PackCreateWithoutReleaseInput_schema_1.PackCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => PackCreateWithoutReleaseInput_schema_1.PackCreateWithoutReleaseInputObjectSchema).array(),
        zod_1.z.lazy(() => PackUncheckedCreateWithoutReleaseInput_schema_1.PackUncheckedCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedCreateWithoutReleaseInput_schema_1.PackUncheckedCreateWithoutReleaseInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PackCreateOrConnectWithoutReleaseInput_schema_1.PackCreateOrConnectWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => PackCreateOrConnectWithoutReleaseInput_schema_1.PackCreateOrConnectWithoutReleaseInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => PackCreateManyReleaseInputEnvelope_schema_1.PackCreateManyReleaseInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
