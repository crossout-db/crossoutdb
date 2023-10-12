"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeUpdateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const ItemUpdateOneRequiredWithoutBadgeExchangeNestedInput_schema_1 = require("./ItemUpdateOneRequiredWithoutBadgeExchangeNestedInput.schema");
exports.BadgeExchangeUpdateInputObjectSchema = zod_1.z.object({
    quantity: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), badges: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), active: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputObjectSchema)]).optional(), timestamp: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), item: zod_1.z.lazy(() => ItemUpdateOneRequiredWithoutBadgeExchangeNestedInput_schema_1.ItemUpdateOneRequiredWithoutBadgeExchangeNestedInputObjectSchema).optional()
}).strict();
