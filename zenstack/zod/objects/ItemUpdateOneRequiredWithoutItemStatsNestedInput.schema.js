"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateOneRequiredWithoutItemStatsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutItemStatsInput_schema_1 = require("./ItemCreateWithoutItemStatsInput.schema");
const ItemUncheckedCreateWithoutItemStatsInput_schema_1 = require("./ItemUncheckedCreateWithoutItemStatsInput.schema");
const ItemCreateOrConnectWithoutItemStatsInput_schema_1 = require("./ItemCreateOrConnectWithoutItemStatsInput.schema");
const ItemUpsertWithoutItemStatsInput_schema_1 = require("./ItemUpsertWithoutItemStatsInput.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateToOneWithWhereWithoutItemStatsInput_schema_1 = require("./ItemUpdateToOneWithWhereWithoutItemStatsInput.schema");
const ItemUpdateWithoutItemStatsInput_schema_1 = require("./ItemUpdateWithoutItemStatsInput.schema");
const ItemUncheckedUpdateWithoutItemStatsInput_schema_1 = require("./ItemUncheckedUpdateWithoutItemStatsInput.schema");
exports.ItemUpdateOneRequiredWithoutItemStatsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutItemStatsInput_schema_1.ItemCreateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutItemStatsInput_schema_1.ItemUncheckedCreateWithoutItemStatsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ItemCreateOrConnectWithoutItemStatsInput_schema_1.ItemCreateOrConnectWithoutItemStatsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ItemUpsertWithoutItemStatsInput_schema_1.ItemUpsertWithoutItemStatsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateToOneWithWhereWithoutItemStatsInput_schema_1.ItemUpdateToOneWithWhereWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateWithoutItemStatsInput_schema_1.ItemUpdateWithoutItemStatsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutItemStatsInput_schema_1.ItemUncheckedUpdateWithoutItemStatsInputObjectSchema)]).optional()
}).strict();
