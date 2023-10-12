"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsCreateNestedManyWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsCreateWithoutItemInput_schema_1 = require("./ItemStatsCreateWithoutItemInput.schema");
const ItemStatsUncheckedCreateWithoutItemInput_schema_1 = require("./ItemStatsUncheckedCreateWithoutItemInput.schema");
const ItemStatsCreateOrConnectWithoutItemInput_schema_1 = require("./ItemStatsCreateOrConnectWithoutItemInput.schema");
const ItemStatsCreateManyItemInputEnvelope_schema_1 = require("./ItemStatsCreateManyItemInputEnvelope.schema");
const ItemStatsWhereUniqueInput_schema_1 = require("./ItemStatsWhereUniqueInput.schema");
exports.ItemStatsCreateNestedManyWithoutItemInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateWithoutItemInput_schema_1.ItemStatsCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateWithoutItemInput_schema_1.ItemStatsCreateWithoutItemInputObjectSchema).array(),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutItemInput_schema_1.ItemStatsUncheckedCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutItemInput_schema_1.ItemStatsUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateOrConnectWithoutItemInput_schema_1.ItemStatsCreateOrConnectWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateOrConnectWithoutItemInput_schema_1.ItemStatsCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ItemStatsCreateManyItemInputEnvelope_schema_1.ItemStatsCreateManyItemInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
