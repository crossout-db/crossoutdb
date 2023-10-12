"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemCreateNestedManyWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemCreateWithoutItemInput_schema_1 = require("./PackItemCreateWithoutItemInput.schema");
const PackItemUncheckedCreateWithoutItemInput_schema_1 = require("./PackItemUncheckedCreateWithoutItemInput.schema");
const PackItemCreateOrConnectWithoutItemInput_schema_1 = require("./PackItemCreateOrConnectWithoutItemInput.schema");
const PackItemCreateManyItemInputEnvelope_schema_1 = require("./PackItemCreateManyItemInputEnvelope.schema");
const PackItemWhereUniqueInput_schema_1 = require("./PackItemWhereUniqueInput.schema");
exports.PackItemCreateNestedManyWithoutItemInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PackItemCreateWithoutItemInput_schema_1.PackItemCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => PackItemCreateWithoutItemInput_schema_1.PackItemCreateWithoutItemInputObjectSchema).array(),
        zod_1.z.lazy(() => PackItemUncheckedCreateWithoutItemInput_schema_1.PackItemUncheckedCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => PackItemUncheckedCreateWithoutItemInput_schema_1.PackItemUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PackItemCreateOrConnectWithoutItemInput_schema_1.PackItemCreateOrConnectWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => PackItemCreateOrConnectWithoutItemInput_schema_1.PackItemCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => PackItemCreateManyItemInputEnvelope_schema_1.PackItemCreateManyItemInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PackItemWhereUniqueInput_schema_1.PackItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
