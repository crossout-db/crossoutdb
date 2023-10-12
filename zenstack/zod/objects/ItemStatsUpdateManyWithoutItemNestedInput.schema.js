"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsUpdateManyWithoutItemNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsCreateWithoutItemInput_schema_1 = require("./ItemStatsCreateWithoutItemInput.schema");
const ItemStatsUncheckedCreateWithoutItemInput_schema_1 = require("./ItemStatsUncheckedCreateWithoutItemInput.schema");
const ItemStatsCreateOrConnectWithoutItemInput_schema_1 = require("./ItemStatsCreateOrConnectWithoutItemInput.schema");
const ItemStatsUpsertWithWhereUniqueWithoutItemInput_schema_1 = require("./ItemStatsUpsertWithWhereUniqueWithoutItemInput.schema");
const ItemStatsCreateManyItemInputEnvelope_schema_1 = require("./ItemStatsCreateManyItemInputEnvelope.schema");
const ItemStatsWhereUniqueInput_schema_1 = require("./ItemStatsWhereUniqueInput.schema");
const ItemStatsUpdateWithWhereUniqueWithoutItemInput_schema_1 = require("./ItemStatsUpdateWithWhereUniqueWithoutItemInput.schema");
const ItemStatsUpdateManyWithWhereWithoutItemInput_schema_1 = require("./ItemStatsUpdateManyWithWhereWithoutItemInput.schema");
const ItemStatsScalarWhereInput_schema_1 = require("./ItemStatsScalarWhereInput.schema");
exports.ItemStatsUpdateManyWithoutItemNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateWithoutItemInput_schema_1.ItemStatsCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateWithoutItemInput_schema_1.ItemStatsCreateWithoutItemInputObjectSchema).array(),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutItemInput_schema_1.ItemStatsUncheckedCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutItemInput_schema_1.ItemStatsUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateOrConnectWithoutItemInput_schema_1.ItemStatsCreateOrConnectWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateOrConnectWithoutItemInput_schema_1.ItemStatsCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpsertWithWhereUniqueWithoutItemInput_schema_1.ItemStatsUpsertWithWhereUniqueWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUpsertWithWhereUniqueWithoutItemInput_schema_1.ItemStatsUpsertWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ItemStatsCreateManyItemInputEnvelope_schema_1.ItemStatsCreateManyItemInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpdateWithWhereUniqueWithoutItemInput_schema_1.ItemStatsUpdateWithWhereUniqueWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUpdateWithWhereUniqueWithoutItemInput_schema_1.ItemStatsUpdateWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpdateManyWithWhereWithoutItemInput_schema_1.ItemStatsUpdateManyWithWhereWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUpdateManyWithWhereWithoutItemInput_schema_1.ItemStatsUpdateManyWithWhereWithoutItemInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => ItemStatsScalarWhereInput_schema_1.ItemStatsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsScalarWhereInput_schema_1.ItemStatsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
