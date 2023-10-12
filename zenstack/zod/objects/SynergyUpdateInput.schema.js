"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyUpdateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const SynergyItemUpdateManyWithoutSynergyNestedInput_schema_1 = require("./SynergyItemUpdateManyWithoutSynergyNestedInput.schema");
exports.SynergyUpdateInputObjectSchema = zod_1.z.object({
    name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), synergyItems: zod_1.z.lazy(() => SynergyItemUpdateManyWithoutSynergyNestedInput_schema_1.SynergyItemUpdateManyWithoutSynergyNestedInputObjectSchema).optional()
}).strict();
