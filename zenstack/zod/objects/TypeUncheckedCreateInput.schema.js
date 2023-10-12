"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeUncheckedCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemUncheckedCreateNestedManyWithoutTypeInput_schema_1 = require("./ItemUncheckedCreateNestedManyWithoutTypeInput.schema");
exports.TypeUncheckedCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), name: zod_1.z.string(), items: zod_1.z.lazy(() => ItemUncheckedCreateNestedManyWithoutTypeInput_schema_1.ItemUncheckedCreateNestedManyWithoutTypeInputObjectSchema).optional()
}).strict();
