"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketUpdateManyMutationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const FloatFieldUpdateOperationsInput_schema_1 = require("./FloatFieldUpdateOperationsInput.schema");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const NullableFloatFieldUpdateOperationsInput_schema_1 = require("./NullableFloatFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
exports.MarketUpdateManyMutationInputObjectSchema = zod_1.z.object({
    marketDef: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), sellPriceMin: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => FloatFieldUpdateOperationsInput_schema_1.FloatFieldUpdateOperationsInputObjectSchema)]).optional(), sellOrders: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), buyPriceMax: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => FloatFieldUpdateOperationsInput_schema_1.FloatFieldUpdateOperationsInputObjectSchema)]).optional(), buyOrders: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), craftCost: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => NullableFloatFieldUpdateOperationsInput_schema_1.NullableFloatFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
