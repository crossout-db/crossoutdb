"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsCreateNestedManyWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsCreateWithoutUserInput_schema_1 = require("./ItemStatsCreateWithoutUserInput.schema");
const ItemStatsUncheckedCreateWithoutUserInput_schema_1 = require("./ItemStatsUncheckedCreateWithoutUserInput.schema");
const ItemStatsCreateOrConnectWithoutUserInput_schema_1 = require("./ItemStatsCreateOrConnectWithoutUserInput.schema");
const ItemStatsCreateManyUserInputEnvelope_schema_1 = require("./ItemStatsCreateManyUserInputEnvelope.schema");
const ItemStatsWhereUniqueInput_schema_1 = require("./ItemStatsWhereUniqueInput.schema");
exports.ItemStatsCreateNestedManyWithoutUserInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateWithoutUserInput_schema_1.ItemStatsCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateWithoutUserInput_schema_1.ItemStatsCreateWithoutUserInputObjectSchema).array(),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutUserInput_schema_1.ItemStatsUncheckedCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutUserInput_schema_1.ItemStatsUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateOrConnectWithoutUserInput_schema_1.ItemStatsCreateOrConnectWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateOrConnectWithoutUserInput_schema_1.ItemStatsCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ItemStatsCreateManyUserInputEnvelope_schema_1.ItemStatsCreateManyUserInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
