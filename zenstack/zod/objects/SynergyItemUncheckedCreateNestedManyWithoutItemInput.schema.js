"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemUncheckedCreateNestedManyWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemCreateWithoutItemInput_schema_1 = require("./SynergyItemCreateWithoutItemInput.schema");
const SynergyItemUncheckedCreateWithoutItemInput_schema_1 = require("./SynergyItemUncheckedCreateWithoutItemInput.schema");
const SynergyItemCreateOrConnectWithoutItemInput_schema_1 = require("./SynergyItemCreateOrConnectWithoutItemInput.schema");
const SynergyItemCreateManyItemInputEnvelope_schema_1 = require("./SynergyItemCreateManyItemInputEnvelope.schema");
const SynergyItemWhereUniqueInput_schema_1 = require("./SynergyItemWhereUniqueInput.schema");
exports.SynergyItemUncheckedCreateNestedManyWithoutItemInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => SynergyItemCreateWithoutItemInput_schema_1.SynergyItemCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemCreateWithoutItemInput_schema_1.SynergyItemCreateWithoutItemInputObjectSchema).array(),
        zod_1.z.lazy(() => SynergyItemUncheckedCreateWithoutItemInput_schema_1.SynergyItemUncheckedCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUncheckedCreateWithoutItemInput_schema_1.SynergyItemUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => SynergyItemCreateOrConnectWithoutItemInput_schema_1.SynergyItemCreateOrConnectWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemCreateOrConnectWithoutItemInput_schema_1.SynergyItemCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => SynergyItemCreateManyItemInputEnvelope_schema_1.SynergyItemCreateManyItemInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
