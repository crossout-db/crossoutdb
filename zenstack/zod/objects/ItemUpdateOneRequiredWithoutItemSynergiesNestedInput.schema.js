"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateOneRequiredWithoutItemSynergiesNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutItemSynergiesInput_schema_1 = require("./ItemCreateWithoutItemSynergiesInput.schema");
const ItemUncheckedCreateWithoutItemSynergiesInput_schema_1 = require("./ItemUncheckedCreateWithoutItemSynergiesInput.schema");
const ItemCreateOrConnectWithoutItemSynergiesInput_schema_1 = require("./ItemCreateOrConnectWithoutItemSynergiesInput.schema");
const ItemUpsertWithoutItemSynergiesInput_schema_1 = require("./ItemUpsertWithoutItemSynergiesInput.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateToOneWithWhereWithoutItemSynergiesInput_schema_1 = require("./ItemUpdateToOneWithWhereWithoutItemSynergiesInput.schema");
const ItemUpdateWithoutItemSynergiesInput_schema_1 = require("./ItemUpdateWithoutItemSynergiesInput.schema");
const ItemUncheckedUpdateWithoutItemSynergiesInput_schema_1 = require("./ItemUncheckedUpdateWithoutItemSynergiesInput.schema");
exports.ItemUpdateOneRequiredWithoutItemSynergiesNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutItemSynergiesInput_schema_1.ItemCreateWithoutItemSynergiesInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutItemSynergiesInput_schema_1.ItemUncheckedCreateWithoutItemSynergiesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ItemCreateOrConnectWithoutItemSynergiesInput_schema_1.ItemCreateOrConnectWithoutItemSynergiesInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ItemUpsertWithoutItemSynergiesInput_schema_1.ItemUpsertWithoutItemSynergiesInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateToOneWithWhereWithoutItemSynergiesInput_schema_1.ItemUpdateToOneWithWhereWithoutItemSynergiesInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateWithoutItemSynergiesInput_schema_1.ItemUpdateWithoutItemSynergiesInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutItemSynergiesInput_schema_1.ItemUncheckedUpdateWithoutItemSynergiesInputObjectSchema)]).optional()
}).strict();
