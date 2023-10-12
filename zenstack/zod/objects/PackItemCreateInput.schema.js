"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackCreateNestedOneWithoutItemsInput_schema_1 = require("./PackCreateNestedOneWithoutItemsInput.schema");
const ItemCreateNestedOneWithoutPackItemsInput_schema_1 = require("./ItemCreateNestedOneWithoutPackItemsInput.schema");
exports.PackItemCreateInputObjectSchema = zod_1.z.object({
    quantity: zod_1.z.number(), pack: zod_1.z.lazy(() => PackCreateNestedOneWithoutItemsInput_schema_1.PackCreateNestedOneWithoutItemsInputObjectSchema), item: zod_1.z.lazy(() => ItemCreateNestedOneWithoutPackItemsInput_schema_1.ItemCreateNestedOneWithoutPackItemsInputObjectSchema)
}).strict();
