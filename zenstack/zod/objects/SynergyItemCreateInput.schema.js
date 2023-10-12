"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyCreateNestedOneWithoutSynergyItemsInput_schema_1 = require("./SynergyCreateNestedOneWithoutSynergyItemsInput.schema");
const ItemCreateNestedOneWithoutItemSynergiesInput_schema_1 = require("./ItemCreateNestedOneWithoutItemSynergiesInput.schema");
exports.SynergyItemCreateInputObjectSchema = zod_1.z.object({
    synergy: zod_1.z.lazy(() => SynergyCreateNestedOneWithoutSynergyItemsInput_schema_1.SynergyCreateNestedOneWithoutSynergyItemsInputObjectSchema), item: zod_1.z.lazy(() => ItemCreateNestedOneWithoutItemSynergiesInput_schema_1.ItemCreateNestedOneWithoutItemSynergiesInputObjectSchema)
}).strict();
