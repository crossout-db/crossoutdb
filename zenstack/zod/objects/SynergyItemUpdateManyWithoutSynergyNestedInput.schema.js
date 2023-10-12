"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemUpdateManyWithoutSynergyNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemCreateWithoutSynergyInput_schema_1 = require("./SynergyItemCreateWithoutSynergyInput.schema");
const SynergyItemUncheckedCreateWithoutSynergyInput_schema_1 = require("./SynergyItemUncheckedCreateWithoutSynergyInput.schema");
const SynergyItemCreateOrConnectWithoutSynergyInput_schema_1 = require("./SynergyItemCreateOrConnectWithoutSynergyInput.schema");
const SynergyItemUpsertWithWhereUniqueWithoutSynergyInput_schema_1 = require("./SynergyItemUpsertWithWhereUniqueWithoutSynergyInput.schema");
const SynergyItemCreateManySynergyInputEnvelope_schema_1 = require("./SynergyItemCreateManySynergyInputEnvelope.schema");
const SynergyItemWhereUniqueInput_schema_1 = require("./SynergyItemWhereUniqueInput.schema");
const SynergyItemUpdateWithWhereUniqueWithoutSynergyInput_schema_1 = require("./SynergyItemUpdateWithWhereUniqueWithoutSynergyInput.schema");
const SynergyItemUpdateManyWithWhereWithoutSynergyInput_schema_1 = require("./SynergyItemUpdateManyWithWhereWithoutSynergyInput.schema");
const SynergyItemScalarWhereInput_schema_1 = require("./SynergyItemScalarWhereInput.schema");
exports.SynergyItemUpdateManyWithoutSynergyNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => SynergyItemCreateWithoutSynergyInput_schema_1.SynergyItemCreateWithoutSynergyInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemCreateWithoutSynergyInput_schema_1.SynergyItemCreateWithoutSynergyInputObjectSchema).array(),
        zod_1.z.lazy(() => SynergyItemUncheckedCreateWithoutSynergyInput_schema_1.SynergyItemUncheckedCreateWithoutSynergyInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUncheckedCreateWithoutSynergyInput_schema_1.SynergyItemUncheckedCreateWithoutSynergyInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => SynergyItemCreateOrConnectWithoutSynergyInput_schema_1.SynergyItemCreateOrConnectWithoutSynergyInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemCreateOrConnectWithoutSynergyInput_schema_1.SynergyItemCreateOrConnectWithoutSynergyInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => SynergyItemUpsertWithWhereUniqueWithoutSynergyInput_schema_1.SynergyItemUpsertWithWhereUniqueWithoutSynergyInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUpsertWithWhereUniqueWithoutSynergyInput_schema_1.SynergyItemUpsertWithWhereUniqueWithoutSynergyInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => SynergyItemCreateManySynergyInputEnvelope_schema_1.SynergyItemCreateManySynergyInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => SynergyItemUpdateWithWhereUniqueWithoutSynergyInput_schema_1.SynergyItemUpdateWithWhereUniqueWithoutSynergyInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUpdateWithWhereUniqueWithoutSynergyInput_schema_1.SynergyItemUpdateWithWhereUniqueWithoutSynergyInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => SynergyItemUpdateManyWithWhereWithoutSynergyInput_schema_1.SynergyItemUpdateManyWithWhereWithoutSynergyInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUpdateManyWithWhereWithoutSynergyInput_schema_1.SynergyItemUpdateManyWithWhereWithoutSynergyInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => SynergyItemScalarWhereInput_schema_1.SynergyItemScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemScalarWhereInput_schema_1.SynergyItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
