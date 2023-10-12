"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateOrConnectWithoutItemSynergiesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemCreateWithoutItemSynergiesInput_schema_1 = require("./ItemCreateWithoutItemSynergiesInput.schema");
const ItemUncheckedCreateWithoutItemSynergiesInput_schema_1 = require("./ItemUncheckedCreateWithoutItemSynergiesInput.schema");
exports.ItemCreateOrConnectWithoutItemSynergiesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutItemSynergiesInput_schema_1.ItemCreateWithoutItemSynergiesInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutItemSynergiesInput_schema_1.ItemUncheckedCreateWithoutItemSynergiesInputObjectSchema)])
}).strict();
