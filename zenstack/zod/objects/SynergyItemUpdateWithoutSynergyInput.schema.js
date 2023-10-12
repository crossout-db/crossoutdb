"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemUpdateWithoutSynergyInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemUpdateOneRequiredWithoutItemSynergiesNestedInput_schema_1 = require("./ItemUpdateOneRequiredWithoutItemSynergiesNestedInput.schema");
exports.SynergyItemUpdateWithoutSynergyInputObjectSchema = zod_1.z.object({
    item: zod_1.z.lazy(() => ItemUpdateOneRequiredWithoutItemSynergiesNestedInput_schema_1.ItemUpdateOneRequiredWithoutItemSynergiesNestedInputObjectSchema).optional()
}).strict();
