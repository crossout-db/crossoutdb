"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemUpdateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const PackUpdateOneRequiredWithoutItemsNestedInput_schema_1 = require("./PackUpdateOneRequiredWithoutItemsNestedInput.schema");
const ItemUpdateOneRequiredWithoutPackItemsNestedInput_schema_1 = require("./ItemUpdateOneRequiredWithoutPackItemsNestedInput.schema");
exports.PackItemUpdateInputObjectSchema = zod_1.z.object({
    quantity: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), pack: zod_1.z.lazy(() => PackUpdateOneRequiredWithoutItemsNestedInput_schema_1.PackUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional(), item: zod_1.z.lazy(() => ItemUpdateOneRequiredWithoutPackItemsNestedInput_schema_1.ItemUpdateOneRequiredWithoutPackItemsNestedInputObjectSchema).optional()
}).strict();
