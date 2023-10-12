"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemUpdateWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const PackUpdateOneRequiredWithoutItemsNestedInput_schema_1 = require("./PackUpdateOneRequiredWithoutItemsNestedInput.schema");
exports.PackItemUpdateWithoutItemInputObjectSchema = zod_1.z.object({
    quantity: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), pack: zod_1.z.lazy(() => PackUpdateOneRequiredWithoutItemsNestedInput_schema_1.PackUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional()
}).strict();
