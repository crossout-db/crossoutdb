"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUpdateWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const PackItemUpdateManyWithoutPackNestedInput_schema_1 = require("./PackItemUpdateManyWithoutPackNestedInput.schema");
const PackPriceUpdateManyWithoutPackNestedInput_schema_1 = require("./PackPriceUpdateManyWithoutPackNestedInput.schema");
exports.PackUpdateWithoutReleaseInputObjectSchema = zod_1.z.object({
    name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), description: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), steamAppID: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), key: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), coins: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), active: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputObjectSchema)]).optional(), items: zod_1.z.lazy(() => PackItemUpdateManyWithoutPackNestedInput_schema_1.PackItemUpdateManyWithoutPackNestedInputObjectSchema).optional(), packPrices: zod_1.z.lazy(() => PackPriceUpdateManyWithoutPackNestedInput_schema_1.PackPriceUpdateManyWithoutPackNestedInputObjectSchema).optional()
}).strict();
