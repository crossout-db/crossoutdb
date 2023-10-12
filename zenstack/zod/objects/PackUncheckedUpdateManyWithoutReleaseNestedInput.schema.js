"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUncheckedUpdateManyWithoutReleaseNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackCreateWithoutReleaseInput_schema_1 = require("./PackCreateWithoutReleaseInput.schema");
const PackUncheckedCreateWithoutReleaseInput_schema_1 = require("./PackUncheckedCreateWithoutReleaseInput.schema");
const PackCreateOrConnectWithoutReleaseInput_schema_1 = require("./PackCreateOrConnectWithoutReleaseInput.schema");
const PackUpsertWithWhereUniqueWithoutReleaseInput_schema_1 = require("./PackUpsertWithWhereUniqueWithoutReleaseInput.schema");
const PackCreateManyReleaseInputEnvelope_schema_1 = require("./PackCreateManyReleaseInputEnvelope.schema");
const PackWhereUniqueInput_schema_1 = require("./PackWhereUniqueInput.schema");
const PackUpdateWithWhereUniqueWithoutReleaseInput_schema_1 = require("./PackUpdateWithWhereUniqueWithoutReleaseInput.schema");
const PackUpdateManyWithWhereWithoutReleaseInput_schema_1 = require("./PackUpdateManyWithWhereWithoutReleaseInput.schema");
const PackScalarWhereInput_schema_1 = require("./PackScalarWhereInput.schema");
exports.PackUncheckedUpdateManyWithoutReleaseNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PackCreateWithoutReleaseInput_schema_1.PackCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => PackCreateWithoutReleaseInput_schema_1.PackCreateWithoutReleaseInputObjectSchema).array(),
        zod_1.z.lazy(() => PackUncheckedCreateWithoutReleaseInput_schema_1.PackUncheckedCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => PackUncheckedCreateWithoutReleaseInput_schema_1.PackUncheckedCreateWithoutReleaseInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PackCreateOrConnectWithoutReleaseInput_schema_1.PackCreateOrConnectWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => PackCreateOrConnectWithoutReleaseInput_schema_1.PackCreateOrConnectWithoutReleaseInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => PackUpsertWithWhereUniqueWithoutReleaseInput_schema_1.PackUpsertWithWhereUniqueWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => PackUpsertWithWhereUniqueWithoutReleaseInput_schema_1.PackUpsertWithWhereUniqueWithoutReleaseInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => PackCreateManyReleaseInputEnvelope_schema_1.PackCreateManyReleaseInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackWhereUniqueInput_schema_1.PackWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => PackUpdateWithWhereUniqueWithoutReleaseInput_schema_1.PackUpdateWithWhereUniqueWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => PackUpdateWithWhereUniqueWithoutReleaseInput_schema_1.PackUpdateWithWhereUniqueWithoutReleaseInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => PackUpdateManyWithWhereWithoutReleaseInput_schema_1.PackUpdateManyWithWhereWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => PackUpdateManyWithWhereWithoutReleaseInput_schema_1.PackUpdateManyWithWhereWithoutReleaseInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => PackScalarWhereInput_schema_1.PackScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => PackScalarWhereInput_schema_1.PackScalarWhereInputObjectSchema).array()]).optional()
}).strict();
