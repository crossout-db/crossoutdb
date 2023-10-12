"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityUncheckedCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemUncheckedCreateNestedManyWithoutRarityInput_schema_1 = require("./ItemUncheckedCreateNestedManyWithoutRarityInput.schema");
exports.RarityUncheckedCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), name: zod_1.z.string(), order: zod_1.z.number(), primaryColor: zod_1.z.string(), secondaryColor: zod_1.z.string(), items: zod_1.z.lazy(() => ItemUncheckedCreateNestedManyWithoutRarityInput_schema_1.ItemUncheckedCreateNestedManyWithoutRarityInputObjectSchema).optional()
}).strict();
