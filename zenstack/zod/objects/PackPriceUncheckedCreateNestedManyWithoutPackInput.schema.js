"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceUncheckedCreateNestedManyWithoutPackInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackPriceCreateWithoutPackInput_schema_1 = require("./PackPriceCreateWithoutPackInput.schema");
const PackPriceUncheckedCreateWithoutPackInput_schema_1 = require("./PackPriceUncheckedCreateWithoutPackInput.schema");
const PackPriceCreateOrConnectWithoutPackInput_schema_1 = require("./PackPriceCreateOrConnectWithoutPackInput.schema");
const PackPriceCreateManyPackInputEnvelope_schema_1 = require("./PackPriceCreateManyPackInputEnvelope.schema");
const PackPriceWhereUniqueInput_schema_1 = require("./PackPriceWhereUniqueInput.schema");
exports.PackPriceUncheckedCreateNestedManyWithoutPackInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PackPriceCreateWithoutPackInput_schema_1.PackPriceCreateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackPriceCreateWithoutPackInput_schema_1.PackPriceCreateWithoutPackInputObjectSchema).array(),
        zod_1.z.lazy(() => PackPriceUncheckedCreateWithoutPackInput_schema_1.PackPriceUncheckedCreateWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackPriceUncheckedCreateWithoutPackInput_schema_1.PackPriceUncheckedCreateWithoutPackInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PackPriceCreateOrConnectWithoutPackInput_schema_1.PackPriceCreateOrConnectWithoutPackInputObjectSchema),
        zod_1.z.lazy(() => PackPriceCreateOrConnectWithoutPackInput_schema_1.PackPriceCreateOrConnectWithoutPackInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => PackPriceCreateManyPackInputEnvelope_schema_1.PackPriceCreateManyPackInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
