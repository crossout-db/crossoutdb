"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsUncheckedCreateNestedManyWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsCreateWithoutReleaseInput_schema_1 = require("./ItemStatsCreateWithoutReleaseInput.schema");
const ItemStatsUncheckedCreateWithoutReleaseInput_schema_1 = require("./ItemStatsUncheckedCreateWithoutReleaseInput.schema");
const ItemStatsCreateOrConnectWithoutReleaseInput_schema_1 = require("./ItemStatsCreateOrConnectWithoutReleaseInput.schema");
const ItemStatsCreateManyReleaseInputEnvelope_schema_1 = require("./ItemStatsCreateManyReleaseInputEnvelope.schema");
const ItemStatsWhereUniqueInput_schema_1 = require("./ItemStatsWhereUniqueInput.schema");
exports.ItemStatsUncheckedCreateNestedManyWithoutReleaseInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateWithoutReleaseInput_schema_1.ItemStatsCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateWithoutReleaseInput_schema_1.ItemStatsCreateWithoutReleaseInputObjectSchema).array(),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutReleaseInput_schema_1.ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutReleaseInput_schema_1.ItemStatsUncheckedCreateWithoutReleaseInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateOrConnectWithoutReleaseInput_schema_1.ItemStatsCreateOrConnectWithoutReleaseInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateOrConnectWithoutReleaseInput_schema_1.ItemStatsCreateOrConnectWithoutReleaseInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ItemStatsCreateManyReleaseInputEnvelope_schema_1.ItemStatsCreateManyReleaseInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
