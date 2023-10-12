"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpsertWithoutItemSynergiesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemUpdateWithoutItemSynergiesInput_schema_1 = require("./ItemUpdateWithoutItemSynergiesInput.schema");
const ItemUncheckedUpdateWithoutItemSynergiesInput_schema_1 = require("./ItemUncheckedUpdateWithoutItemSynergiesInput.schema");
const ItemCreateWithoutItemSynergiesInput_schema_1 = require("./ItemCreateWithoutItemSynergiesInput.schema");
const ItemUncheckedCreateWithoutItemSynergiesInput_schema_1 = require("./ItemUncheckedCreateWithoutItemSynergiesInput.schema");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.ItemUpsertWithoutItemSynergiesInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutItemSynergiesInput_schema_1.ItemUpdateWithoutItemSynergiesInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutItemSynergiesInput_schema_1.ItemUncheckedUpdateWithoutItemSynergiesInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutItemSynergiesInput_schema_1.ItemCreateWithoutItemSynergiesInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutItemSynergiesInput_schema_1.ItemUncheckedCreateWithoutItemSynergiesInputObjectSchema)]), where: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional()
}).strict();
