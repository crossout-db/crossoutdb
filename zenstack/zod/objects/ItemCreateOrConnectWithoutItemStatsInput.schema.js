"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateOrConnectWithoutItemStatsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemCreateWithoutItemStatsInput_schema_1 = require("./ItemCreateWithoutItemStatsInput.schema");
const ItemUncheckedCreateWithoutItemStatsInput_schema_1 = require("./ItemUncheckedCreateWithoutItemStatsInput.schema");
exports.ItemCreateOrConnectWithoutItemStatsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutItemStatsInput_schema_1.ItemCreateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutItemStatsInput_schema_1.ItemUncheckedCreateWithoutItemStatsInputObjectSchema)])
}).strict();
