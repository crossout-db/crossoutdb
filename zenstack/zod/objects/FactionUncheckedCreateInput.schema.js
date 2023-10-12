"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionUncheckedCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemUncheckedCreateNestedManyWithoutFactionInput_schema_1 = require("./ItemUncheckedCreateNestedManyWithoutFactionInput.schema");
exports.FactionUncheckedCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), name: zod_1.z.string(), items: zod_1.z.lazy(() => ItemUncheckedCreateNestedManyWithoutFactionInput_schema_1.ItemUncheckedCreateNestedManyWithoutFactionInputObjectSchema).optional()
}).strict();
