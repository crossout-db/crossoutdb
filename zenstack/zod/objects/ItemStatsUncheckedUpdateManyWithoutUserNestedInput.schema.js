"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsUncheckedUpdateManyWithoutUserNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsCreateWithoutUserInput_schema_1 = require("./ItemStatsCreateWithoutUserInput.schema");
const ItemStatsUncheckedCreateWithoutUserInput_schema_1 = require("./ItemStatsUncheckedCreateWithoutUserInput.schema");
const ItemStatsCreateOrConnectWithoutUserInput_schema_1 = require("./ItemStatsCreateOrConnectWithoutUserInput.schema");
const ItemStatsUpsertWithWhereUniqueWithoutUserInput_schema_1 = require("./ItemStatsUpsertWithWhereUniqueWithoutUserInput.schema");
const ItemStatsCreateManyUserInputEnvelope_schema_1 = require("./ItemStatsCreateManyUserInputEnvelope.schema");
const ItemStatsWhereUniqueInput_schema_1 = require("./ItemStatsWhereUniqueInput.schema");
const ItemStatsUpdateWithWhereUniqueWithoutUserInput_schema_1 = require("./ItemStatsUpdateWithWhereUniqueWithoutUserInput.schema");
const ItemStatsUpdateManyWithWhereWithoutUserInput_schema_1 = require("./ItemStatsUpdateManyWithWhereWithoutUserInput.schema");
const ItemStatsScalarWhereInput_schema_1 = require("./ItemStatsScalarWhereInput.schema");
exports.ItemStatsUncheckedUpdateManyWithoutUserNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateWithoutUserInput_schema_1.ItemStatsCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateWithoutUserInput_schema_1.ItemStatsCreateWithoutUserInputObjectSchema).array(),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutUserInput_schema_1.ItemStatsUncheckedCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutUserInput_schema_1.ItemStatsUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateOrConnectWithoutUserInput_schema_1.ItemStatsCreateOrConnectWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateOrConnectWithoutUserInput_schema_1.ItemStatsCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpsertWithWhereUniqueWithoutUserInput_schema_1.ItemStatsUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUpsertWithWhereUniqueWithoutUserInput_schema_1.ItemStatsUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ItemStatsCreateManyUserInputEnvelope_schema_1.ItemStatsCreateManyUserInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpdateWithWhereUniqueWithoutUserInput_schema_1.ItemStatsUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUpdateWithWhereUniqueWithoutUserInput_schema_1.ItemStatsUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpdateManyWithWhereWithoutUserInput_schema_1.ItemStatsUpdateManyWithWhereWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUpdateManyWithWhereWithoutUserInput_schema_1.ItemStatsUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => ItemStatsScalarWhereInput_schema_1.ItemStatsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsScalarWhereInput_schema_1.ItemStatsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
