"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceUncheckedUpdateManyWithoutPackNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackPriceCreateWithoutPackInput_schema_1 = require("./PackPriceCreateWithoutPackInput.schema");
const PackPriceUncheckedCreateWithoutPackInput_schema_1 = require("./PackPriceUncheckedCreateWithoutPackInput.schema");
const PackPriceCreateOrConnectWithoutPackInput_schema_1 = require("./PackPriceCreateOrConnectWithoutPackInput.schema");
const PackPriceUpsertWithWhereUniqueWithoutPackInput_schema_1 = require("./PackPriceUpsertWithWhereUniqueWithoutPackInput.schema");
const PackPriceCreateManyPackInputEnvelope_schema_1 = require("./PackPriceCreateManyPackInputEnvelope.schema");
const PackPriceWhereUniqueInput_schema_1 = require("./PackPriceWhereUniqueInput.schema");
const PackPriceUpdateWithWhereUniqueWithoutPackInput_schema_1 = require("./PackPriceUpdateWithWhereUniqueWithoutPackInput.schema");
const PackPriceUpdateManyWithWhereWithoutPackInput_schema_1 = require("./PackPriceUpdateManyWithWhereWithoutPackInput.schema");
const PackPriceScalarWhereInput_schema_1 = require("./PackPriceScalarWhereInput.schema");
exports.PackPriceUncheckedUpdateManyWithoutPackNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PackPriceCreateWithoutPackInput_schema_1.PackPriceCreateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackPriceCreateWithoutPackInput_schema_1.PackPriceCreateWithoutPackInputObjectSchema).array(),
        zod_1.z.lazy(() => PackPriceUncheckedCreateWithoutPackInput_schema_1.PackPriceUncheckedCreateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackPriceUncheckedCreateWithoutPackInput_schema_1.PackPriceUncheckedCreateWithoutPackInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PackPriceCreateOrConnectWithoutPackInput_schema_1.PackPriceCreateOrConnectWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackPriceCreateOrConnectWithoutPackInput_schema_1.PackPriceCreateOrConnectWithoutPackInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => PackPriceUpsertWithWhereUniqueWithoutPackInput_schema_1.PackPriceUpsertWithWhereUniqueWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackPriceUpsertWithWhereUniqueWithoutPackInput_schema_1.PackPriceUpsertWithWhereUniqueWithoutPackInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => PackPriceCreateManyPackInputEnvelope_schema_1.PackPriceCreateManyPackInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => PackPriceUpdateWithWhereUniqueWithoutPackInput_schema_1.PackPriceUpdateWithWhereUniqueWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackPriceUpdateWithWhereUniqueWithoutPackInput_schema_1.PackPriceUpdateWithWhereUniqueWithoutPackInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => PackPriceUpdateManyWithWhereWithoutPackInput_schema_1.PackPriceUpdateManyWithWhereWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackPriceUpdateManyWithWhereWithoutPackInput_schema_1.PackPriceUpdateManyWithWhereWithoutPackInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => PackPriceScalarWhereInput_schema_1.PackPriceScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => PackPriceScalarWhereInput_schema_1.PackPriceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
