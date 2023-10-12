"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsCreateOrConnectWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsWhereUniqueInput_schema_1 = require("./ItemStatsWhereUniqueInput.schema");
const ItemStatsCreateWithoutItemInput_schema_1 = require("./ItemStatsCreateWithoutItemInput.schema");
const ItemStatsUncheckedCreateWithoutItemInput_schema_1 = require("./ItemStatsUncheckedCreateWithoutItemInput.schema");
exports.ItemStatsCreateOrConnectWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemStatsWhereUniqueInput_schema_1.ItemStatsWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateWithoutItemInput_schema_1.ItemStatsCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsUncheckedCreateWithoutItemInput_schema_1.ItemStatsUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
