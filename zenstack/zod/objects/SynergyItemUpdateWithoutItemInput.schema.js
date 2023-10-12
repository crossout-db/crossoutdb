"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemUpdateWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyUpdateOneRequiredWithoutSynergyItemsNestedInput_schema_1 = require("./SynergyUpdateOneRequiredWithoutSynergyItemsNestedInput.schema");
exports.SynergyItemUpdateWithoutItemInputObjectSchema = zod_1.z.object({
    synergy: zod_1.z.lazy(() => SynergyUpdateOneRequiredWithoutSynergyItemsNestedInput_schema_1.SynergyUpdateOneRequiredWithoutSynergyItemsNestedInputObjectSchema).optional()
}).strict();
