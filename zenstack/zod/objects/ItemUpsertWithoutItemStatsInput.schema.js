"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpsertWithoutItemStatsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemUpdateWithoutItemStatsInput_schema_1 = require("./ItemUpdateWithoutItemStatsInput.schema");
const ItemUncheckedUpdateWithoutItemStatsInput_schema_1 = require("./ItemUncheckedUpdateWithoutItemStatsInput.schema");
const ItemCreateWithoutItemStatsInput_schema_1 = require("./ItemCreateWithoutItemStatsInput.schema");
const ItemUncheckedCreateWithoutItemStatsInput_schema_1 = require("./ItemUncheckedCreateWithoutItemStatsInput.schema");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.ItemUpsertWithoutItemStatsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutItemStatsInput_schema_1.ItemUpdateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutItemStatsInput_schema_1.ItemUncheckedUpdateWithoutItemStatsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutItemStatsInput_schema_1.ItemCreateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutItemStatsInput_schema_1.ItemUncheckedCreateWithoutItemStatsInputObjectSchema)]), where: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional()
}).strict();
