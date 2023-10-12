"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateToOneWithWhereWithoutItemSynergiesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
const ItemUpdateWithoutItemSynergiesInput_schema_1 = require("./ItemUpdateWithoutItemSynergiesInput.schema");
const ItemUncheckedUpdateWithoutItemSynergiesInput_schema_1 = require("./ItemUncheckedUpdateWithoutItemSynergiesInput.schema");
exports.ItemUpdateToOneWithWhereWithoutItemSynergiesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutItemSynergiesInput_schema_1.ItemUpdateWithoutItemSynergiesInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutItemSynergiesInput_schema_1.ItemUncheckedUpdateWithoutItemSynergiesInputObjectSchema)])
}).strict();
