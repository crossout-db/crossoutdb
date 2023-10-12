"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemUpdateManyWithoutItemNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemCreateWithoutItemInput_schema_1 = require("./SynergyItemCreateWithoutItemInput.schema");
const SynergyItemUncheckedCreateWithoutItemInput_schema_1 = require("./SynergyItemUncheckedCreateWithoutItemInput.schema");
const SynergyItemCreateOrConnectWithoutItemInput_schema_1 = require("./SynergyItemCreateOrConnectWithoutItemInput.schema");
const SynergyItemUpsertWithWhereUniqueWithoutItemInput_schema_1 = require("./SynergyItemUpsertWithWhereUniqueWithoutItemInput.schema");
const SynergyItemCreateManyItemInputEnvelope_schema_1 = require("./SynergyItemCreateManyItemInputEnvelope.schema");
const SynergyItemWhereUniqueInput_schema_1 = require("./SynergyItemWhereUniqueInput.schema");
const SynergyItemUpdateWithWhereUniqueWithoutItemInput_schema_1 = require("./SynergyItemUpdateWithWhereUniqueWithoutItemInput.schema");
const SynergyItemUpdateManyWithWhereWithoutItemInput_schema_1 = require("./SynergyItemUpdateManyWithWhereWithoutItemInput.schema");
const SynergyItemScalarWhereInput_schema_1 = require("./SynergyItemScalarWhereInput.schema");
exports.SynergyItemUpdateManyWithoutItemNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => SynergyItemCreateWithoutItemInput_schema_1.SynergyItemCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemCreateWithoutItemInput_schema_1.SynergyItemCreateWithoutItemInputObjectSchema).array(),
        zod_1.z.lazy(() => SynergyItemUncheckedCreateWithoutItemInput_schema_1.SynergyItemUncheckedCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUncheckedCreateWithoutItemInput_schema_1.SynergyItemUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => SynergyItemCreateOrConnectWithoutItemInput_schema_1.SynergyItemCreateOrConnectWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemCreateOrConnectWithoutItemInput_schema_1.SynergyItemCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => SynergyItemUpsertWithWhereUniqueWithoutItemInput_schema_1.SynergyItemUpsertWithWhereUniqueWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUpsertWithWhereUniqueWithoutItemInput_schema_1.SynergyItemUpsertWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => SynergyItemCreateManyItemInputEnvelope_schema_1.SynergyItemCreateManyItemInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemWhereUniqueInput_schema_1.SynergyItemWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => SynergyItemUpdateWithWhereUniqueWithoutItemInput_schema_1.SynergyItemUpdateWithWhereUniqueWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUpdateWithWhereUniqueWithoutItemInput_schema_1.SynergyItemUpdateWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => SynergyItemUpdateManyWithWhereWithoutItemInput_schema_1.SynergyItemUpdateManyWithWhereWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemUpdateManyWithWhereWithoutItemInput_schema_1.SynergyItemUpdateManyWithWhereWithoutItemInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => SynergyItemScalarWhereInput_schema_1.SynergyItemScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemScalarWhereInput_schema_1.SynergyItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
