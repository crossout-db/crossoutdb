"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsUpsertWithWhereUniqueWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsWhereUniqueInput_schema_1 = require("./ItemStatsWhereUniqueInput.schema");
const ItemStatsUpdateWithoutItemInput_schema_1 = require("./ItemStatsUpdateWithoutItemInput.schema");
const ItemStatsUncheckedUpdateWithoutItemInput_schema_1 = require("./ItemStatsUncheckedUpdateWithoutItemInput.schema");
const ItemStatsCreateWithoutItemInput_schema_1 = require("./ItemStatsCreateWithoutItemInput.schema");
const ItemStatsUncheckedCreateWithoutItemInput_schema_1 = require("./ItemStatsUncheckedCreateWithoutItemInput.schema");
exports.ItemStatsUpsertWithWhereUniqueWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => ItemStatsUpdateWithoutItemInput_schema_1.ItemStatsUpdateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedUpdateWithoutItemInput_schema_1.ItemStatsUncheckedUpdateWithoutItemInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateWithoutItemInput_schema_1.ItemStatsCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutItemInput_schema_1.ItemStatsUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
