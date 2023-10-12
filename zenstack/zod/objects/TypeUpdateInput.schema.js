"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeUpdateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const ItemUpdateManyWithoutTypeNestedInput_schema_1 = require("./ItemUpdateManyWithoutTypeNestedInput.schema");
exports.TypeUpdateInputObjectSchema = zod_1.z.object({
    name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), items: zod_1.z.lazy(() => ItemUpdateManyWithoutTypeNestedInput_schema_1.ItemUpdateManyWithoutTypeNestedInputObjectSchema).optional()
}).strict();
