"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionUncheckedUpdateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const ItemUncheckedUpdateManyWithoutFactionNestedInput_schema_1 = require("./ItemUncheckedUpdateManyWithoutFactionNestedInput.schema");
exports.FactionUncheckedUpdateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), items: zod_1.z.lazy(() => ItemUncheckedUpdateManyWithoutFactionNestedInput_schema_1.ItemUncheckedUpdateManyWithoutFactionNestedInputObjectSchema).optional()
}).strict();
