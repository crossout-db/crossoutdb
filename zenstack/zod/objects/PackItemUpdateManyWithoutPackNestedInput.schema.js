"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemUpdateManyWithoutPackNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemCreateWithoutPackInput_schema_1 = require("./PackItemCreateWithoutPackInput.schema");
const PackItemUncheckedCreateWithoutPackInput_schema_1 = require("./PackItemUncheckedCreateWithoutPackInput.schema");
const PackItemCreateOrConnectWithoutPackInput_schema_1 = require("./PackItemCreateOrConnectWithoutPackInput.schema");
const PackItemUpsertWithWhereUniqueWithoutPackInput_schema_1 = require("./PackItemUpsertWithWhereUniqueWithoutPackInput.schema");
const PackItemCreateManyPackInputEnvelope_schema_1 = require("./PackItemCreateManyPackInputEnvelope.schema");
const PackItemWhereUniqueInput_schema_1 = require("./PackItemWhereUniqueInput.schema");
const PackItemUpdateWithWhereUniqueWithoutPackInput_schema_1 = require("./PackItemUpdateWithWhereUniqueWithoutPackInput.schema");
const PackItemUpdateManyWithWhereWithoutPackInput_schema_1 = require("./PackItemUpdateManyWithWhereWithoutPackInput.schema");
const PackItemScalarWhereInput_schema_1 = require("./PackItemScalarWhereInput.schema");
exports.PackItemUpdateManyWithoutPackNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PackItemCreateWithoutPackInput_schema_1.PackItemCreateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackItemCreateWithoutPackInput_schema_1.PackItemCreateWithoutPackInputObjectSchema).array(),
        zod_1.z.lazy(() => PackItemUncheckedCreateWithoutPackInput_schema_1.PackItemUncheckedCreateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackItemUncheckedCreateWithoutPackInput_schema_1.PackItemUncheckedCreateWithoutPackInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PackItemCreateOrConnectWithoutPackInput_schema_1.PackItemCreateOrConnectWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackItemCreateOrConnectWithoutPackInput_schema_1.PackItemCreateOrConnectWithoutPackInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => PackItemUpsertWithWhereUniqueWithoutPackInput_schema_1.PackItemUpsertWithWhereUniqueWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackItemUpsertWithWhereUniqueWithoutPackInput_schema_1.PackItemUpsertWithWhereUniqueWithoutPackInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => PackItemCreateManyPackInputEnvelope_schema_1.PackItemCreateManyPackInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => PackItemUpdateWithWhereUniqueWithoutPackInput_schema_1.PackItemUpdateWithWhereUniqueWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackItemUpdateWithWhereUniqueWithoutPackInput_schema_1.PackItemUpdateWithWhereUniqueWithoutPackInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => PackItemUpdateManyWithWhereWithoutPackInput_schema_1.PackItemUpdateManyWithWhereWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackItemUpdateManyWithWhereWithoutPackInput_schema_1.PackItemUpdateManyWithWhereWithoutPackInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => PackItemScalarWhereInput_schema_1.PackItemScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => PackItemScalarWhereInput_schema_1.PackItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
