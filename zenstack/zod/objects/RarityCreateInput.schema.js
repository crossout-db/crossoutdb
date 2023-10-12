"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateNestedManyWithoutRarityInput_schema_1 = require("./ItemCreateNestedManyWithoutRarityInput.schema");
exports.RarityCreateInputObjectSchema = zod_1.z.object({
    name: zod_1.z.string(), order: zod_1.z.number(), primaryColor: zod_1.z.string(), secondaryColor: zod_1.z.string(), items: zod_1.z.lazy(() => ItemCreateNestedManyWithoutRarityInput_schema_1.ItemCreateNestedManyWithoutRarityInputObjectSchema).optional()
}).strict();
