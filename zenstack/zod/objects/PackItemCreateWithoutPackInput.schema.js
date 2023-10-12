"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemCreateWithoutPackInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateNestedOneWithoutPackItemsInput_schema_1 = require("./ItemCreateNestedOneWithoutPackItemsInput.schema");
exports.PackItemCreateWithoutPackInputObjectSchema = zod_1.z.object({
    quantity: zod_1.z.number(), item: zod_1.z.lazy(() => ItemCreateNestedOneWithoutPackItemsInput_schema_1.ItemCreateNestedOneWithoutPackItemsInputObjectSchema)
}).strict();
