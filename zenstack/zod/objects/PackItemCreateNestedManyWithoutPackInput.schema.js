"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemCreateNestedManyWithoutPackInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemCreateWithoutPackInput_schema_1 = require("./PackItemCreateWithoutPackInput.schema");
const PackItemUncheckedCreateWithoutPackInput_schema_1 = require("./PackItemUncheckedCreateWithoutPackInput.schema");
const PackItemCreateOrConnectWithoutPackInput_schema_1 = require("./PackItemCreateOrConnectWithoutPackInput.schema");
const PackItemCreateManyPackInputEnvelope_schema_1 = require("./PackItemCreateManyPackInputEnvelope.schema");
const PackItemWhereUniqueInput_schema_1 = require("./PackItemWhereUniqueInput.schema");
exports.PackItemCreateNestedManyWithoutPackInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PackItemCreateWithoutPackInput_schema_1.PackItemCreateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackItemCreateWithoutPackInput_schema_1.PackItemCreateWithoutPackInputObjectSchema).array(),
        zod_1.z.lazy(() => PackItemUncheckedCreateWithoutPackInput_schema_1.PackItemUncheckedCreateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackItemUncheckedCreateWithoutPackInput_schema_1.PackItemUncheckedCreateWithoutPackInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PackItemCreateOrConnectWithoutPackInput_schema_1.PackItemCreateOrConnectWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackItemCreateOrConnectWithoutPackInput_schema_1.PackItemCreateOrConnectWithoutPackInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => PackItemCreateManyPackInputEnvelope_schema_1.PackItemCreateManyPackInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
