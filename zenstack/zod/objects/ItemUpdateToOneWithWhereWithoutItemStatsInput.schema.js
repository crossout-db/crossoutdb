"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateToOneWithWhereWithoutItemStatsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
const ItemUpdateWithoutItemStatsInput_schema_1 = require("./ItemUpdateWithoutItemStatsInput.schema");
const ItemUncheckedUpdateWithoutItemStatsInput_schema_1 = require("./ItemUncheckedUpdateWithoutItemStatsInput.schema");
exports.ItemUpdateToOneWithWhereWithoutItemStatsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutItemStatsInput_schema_1.ItemUpdateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutItemStatsInput_schema_1.ItemUncheckedUpdateWithoutItemStatsInputObjectSchema)])
}).strict();
