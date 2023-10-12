"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateNestedOneWithoutItemSynergiesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutItemSynergiesInput_schema_1 = require("./ItemCreateWithoutItemSynergiesInput.schema");
const ItemUncheckedCreateWithoutItemSynergiesInput_schema_1 = require("./ItemUncheckedCreateWithoutItemSynergiesInput.schema");
const ItemCreateOrConnectWithoutItemSynergiesInput_schema_1 = require("./ItemCreateOrConnectWithoutItemSynergiesInput.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
exports.ItemCreateNestedOneWithoutItemSynergiesInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutItemSynergiesInput_schema_1.ItemCreateWithoutItemSynergiesInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutItemSynergiesInput_schema_1.ItemUncheckedCreateWithoutItemSynergiesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ItemCreateOrConnectWithoutItemSynergiesInput_schema_1.ItemCreateOrConnectWithoutItemSynergiesInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).optional()
}).strict();
