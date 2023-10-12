"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemCreateWithoutSynergyInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateNestedOneWithoutItemSynergiesInput_schema_1 = require("./ItemCreateNestedOneWithoutItemSynergiesInput.schema");
exports.SynergyItemCreateWithoutSynergyInputObjectSchema = zod_1.z.object({
    item: zod_1.z.lazy(() => ItemCreateNestedOneWithoutItemSynergiesInput_schema_1.ItemCreateNestedOneWithoutItemSynergiesInputObjectSchema)
}).strict();
