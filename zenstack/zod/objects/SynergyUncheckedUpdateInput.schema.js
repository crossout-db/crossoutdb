"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyUncheckedUpdateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const SynergyItemUncheckedUpdateManyWithoutSynergyNestedInput_schema_1 = require("./SynergyItemUncheckedUpdateManyWithoutSynergyNestedInput.schema");
exports.SynergyUncheckedUpdateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), synergyItems: zod_1.z.lazy(() => SynergyItemUncheckedUpdateManyWithoutSynergyNestedInput_schema_1.SynergyItemUncheckedUpdateManyWithoutSynergyNestedInputObjectSchema).optional()
}).strict();
