"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemCreateNestedManyWithoutSynergyInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemCreateWithoutSynergyInput_schema_1 = require("./SynergyItemCreateWithoutSynergyInput.schema");
const SynergyItemUncheckedCreateWithoutSynergyInput_schema_1 = require("./SynergyItemUncheckedCreateWithoutSynergyInput.schema");
const SynergyItemCreateOrConnectWithoutSynergyInput_schema_1 = require("./SynergyItemCreateOrConnectWithoutSynergyInput.schema");
const SynergyItemCreateManySynergyInputEnvelope_schema_1 = require("./SynergyItemCreateManySynergyInputEnvelope.schema");
const SynergyItemWhereUniqueInput_schema_1 = require("./SynergyItemWhereUniqueInput.schema");
exports.SynergyItemCreateNestedManyWithoutSynergyInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => SynergyItemCreateWithoutSynergyInput_schema_1.SynergyItemCreateWithoutSynergyInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemCreateWithoutSynergyInput_schema_1.SynergyItemCreateWithoutSynergyInputObjectSchema).array(),
        zod_1.z.lazy(() => SynergyItemUncheckedCreateWithoutSynergyInput_schema_1.SynergyItemUncheckedCreateWithoutSynergyInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUncheckedCreateWithoutSynergyInput_schema_1.SynergyItemUncheckedCreateWithoutSynergyInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => SynergyItemCreateOrConnectWithoutSynergyInput_schema_1.SynergyItemCreateOrConnectWithoutSynergyInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemCreateOrConnectWithoutSynergyInput_schema_1.SynergyItemCreateOrConnectWithoutSynergyInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => SynergyItemCreateManySynergyInputEnvelope_schema_1.SynergyItemCreateManySynergyInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
