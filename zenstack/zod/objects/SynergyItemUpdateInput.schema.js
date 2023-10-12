"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemUpdateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyUpdateOneRequiredWithoutSynergyItemsNestedInput_schema_1 = require("./SynergyUpdateOneRequiredWithoutSynergyItemsNestedInput.schema");
const ItemUpdateOneRequiredWithoutItemSynergiesNestedInput_schema_1 = require("./ItemUpdateOneRequiredWithoutItemSynergiesNestedInput.schema");
exports.SynergyItemUpdateInputObjectSchema = zod_1.z.object({
    synergy: zod_1.z.lazy(() => SynergyUpdateOneRequiredWithoutSynergyItemsNestedInput_schema_1.SynergyUpdateOneRequiredWithoutSynergyItemsNestedInputObjectSchema).optional(), item: zod_1.z.lazy(() => ItemUpdateOneRequiredWithoutItemSynergiesNestedInput_schema_1.ItemUpdateOneRequiredWithoutItemSynergiesNestedInputObjectSchema).optional()
}).strict();
