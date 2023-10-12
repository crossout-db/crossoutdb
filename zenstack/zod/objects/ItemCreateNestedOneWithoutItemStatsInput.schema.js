"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateNestedOneWithoutItemStatsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutItemStatsInput_schema_1 = require("./ItemCreateWithoutItemStatsInput.schema");
const ItemUncheckedCreateWithoutItemStatsInput_schema_1 = require("./ItemUncheckedCreateWithoutItemStatsInput.schema");
const ItemCreateOrConnectWithoutItemStatsInput_schema_1 = require("./ItemCreateOrConnectWithoutItemStatsInput.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
exports.ItemCreateNestedOneWithoutItemStatsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutItemStatsInput_schema_1.ItemCreateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutItemStatsInput_schema_1.ItemUncheckedCreateWithoutItemStatsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ItemCreateOrConnectWithoutItemStatsInput_schema_1.ItemCreateOrConnectWithoutItemStatsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).optional()
}).strict();
