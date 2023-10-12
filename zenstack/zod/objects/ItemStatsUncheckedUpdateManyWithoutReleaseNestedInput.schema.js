"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsUncheckedUpdateManyWithoutReleaseNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsCreateWithoutReleaseInput_schema_1 = require("./ItemStatsCreateWithoutReleaseInput.schema");
const ItemStatsUncheckedCreateWithoutReleaseInput_schema_1 = require("./ItemStatsUncheckedCreateWithoutReleaseInput.schema");
const ItemStatsCreateOrConnectWithoutReleaseInput_schema_1 = require("./ItemStatsCreateOrConnectWithoutReleaseInput.schema");
const ItemStatsUpsertWithWhereUniqueWithoutReleaseInput_schema_1 = require("./ItemStatsUpsertWithWhereUniqueWithoutReleaseInput.schema");
const ItemStatsCreateManyReleaseInputEnvelope_schema_1 = require("./ItemStatsCreateManyReleaseInputEnvelope.schema");
const ItemStatsWhereUniqueInput_schema_1 = require("./ItemStatsWhereUniqueInput.schema");
const ItemStatsUpdateWithWhereUniqueWithoutReleaseInput_schema_1 = require("./ItemStatsUpdateWithWhereUniqueWithoutReleaseInput.schema");
const ItemStatsUpdateManyWithWhereWithoutReleaseInput_schema_1 = require("./ItemStatsUpdateManyWithWhereWithoutReleaseInput.schema");
const ItemStatsScalarWhereInput_schema_1 = require("./ItemStatsScalarWhereInput.schema");
exports.ItemStatsUncheckedUpdateManyWithoutReleaseNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateWithoutReleaseInput_schema_1.ItemStatsCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateWithoutReleaseInput_schema_1.ItemStatsCreateWithoutReleaseInputObjectSchema).array(),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutReleaseInput_schema_1.ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutReleaseInput_schema_1.ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateOrConnectWithoutReleaseInput_schema_1.ItemStatsCreateOrConnectWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateOrConnectWithoutReleaseInput_schema_1.ItemStatsCreateOrConnectWithoutReleaseInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpsertWithWhereUniqueWithoutReleaseInput_schema_1.ItemStatsUpsertWithWhereUniqueWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUpsertWithWhereUniqueWithoutReleaseInput_schema_1.ItemStatsUpsertWithWhereUniqueWithoutReleaseInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ItemStatsCreateManyReleaseInputEnvelope_schema_1.ItemStatsCreateManyReleaseInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpdateWithWhereUniqueWithoutReleaseInput_schema_1.ItemStatsUpdateWithWhereUniqueWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUpdateWithWhereUniqueWithoutReleaseInput_schema_1.ItemStatsUpdateWithWhereUniqueWithoutReleaseInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpdateManyWithWhereWithoutReleaseInput_schema_1.ItemStatsUpdateManyWithWhereWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUpdateManyWithWhereWithoutReleaseInput_schema_1.ItemStatsUpdateManyWithWhereWithoutReleaseInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => ItemStatsScalarWhereInput_schema_1.ItemStatsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsScalarWhereInput_schema_1.ItemStatsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
