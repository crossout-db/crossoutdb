"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateNestedManyWithoutTypeInput_schema_1 = require("./ItemCreateNestedManyWithoutTypeInput.schema");
exports.TypeCreateInputObjectSchema = zod_1.z.object({
    name: zod_1.z.string(), items: zod_1.z.lazy(() => ItemCreateNestedManyWithoutTypeInput_schema_1.ItemCreateNestedManyWithoutTypeInputObjectSchema).optional()
}).strict();
