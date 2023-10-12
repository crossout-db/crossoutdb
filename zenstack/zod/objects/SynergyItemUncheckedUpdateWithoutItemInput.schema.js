"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemUncheckedUpdateWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
exports.SynergyItemUncheckedUpdateWithoutItemInputObjectSchema = zod_1.z.object({
    synergyId: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
