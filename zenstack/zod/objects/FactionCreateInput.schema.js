"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateNestedManyWithoutFactionInput_schema_1 = require("./ItemCreateNestedManyWithoutFactionInput.schema");
exports.FactionCreateInputObjectSchema = zod_1.z.object({
    name: zod_1.z.string(), items: zod_1.z.lazy(() => ItemCreateNestedManyWithoutFactionInput_schema_1.ItemCreateNestedManyWithoutFactionInputObjectSchema).optional()
}).strict();
