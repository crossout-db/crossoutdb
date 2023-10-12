"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsUpdateWithWhereUniqueWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsWhereUniqueInput_schema_1 = require("./ItemStatsWhereUniqueInput.schema");
const ItemStatsUpdateWithoutItemInput_schema_1 = require("./ItemStatsUpdateWithoutItemInput.schema");
const ItemStatsUncheckedUpdateWithoutItemInput_schema_1 = require("./ItemStatsUncheckedUpdateWithoutItemInput.schema");
exports.ItemStatsUpdateWithWhereUniqueWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpdateWithoutItemInput_schema_1.ItemStatsUpdateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedUpdateWithoutItemInput_schema_1.ItemStatsUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();
