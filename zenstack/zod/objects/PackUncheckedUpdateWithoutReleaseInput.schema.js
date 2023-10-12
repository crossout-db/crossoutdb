"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUncheckedUpdateWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const PackItemUncheckedUpdateManyWithoutPackNestedInput_schema_1 = require("./PackItemUncheckedUpdateManyWithoutPackNestedInput.schema");
const PackPriceUncheckedUpdateManyWithoutPackNestedInput_schema_1 = require("./PackPriceUncheckedUpdateManyWithoutPackNestedInput.schema");
exports.PackUncheckedUpdateWithoutReleaseInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), description: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), steamAppID: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), key: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), coins: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), active: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputObjectSchema)]).optional(), items: zod_1.z.lazy(() => PackItemUncheckedUpdateManyWithoutPackNestedInput_schema_1.PackItemUncheckedUpdateManyWithoutPackNestedInputObjectSchema).optional(), packPrices: zod_1.z.lazy(() => PackPriceUncheckedUpdateManyWithoutPackNestedInput_schema_1.PackPriceUncheckedUpdateManyWithoutPackNestedInputObjectSchema).optional()
}).strict();
