"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUncheckedUpdateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const ItemUncheckedUpdateManyWithoutCategoryNestedInput_schema_1 = require("./ItemUncheckedUpdateManyWithoutCategoryNestedInput.schema");
exports.CategoryUncheckedUpdateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), items: zod_1.z.lazy(() => ItemUncheckedUpdateManyWithoutCategoryNestedInput_schema_1.ItemUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
