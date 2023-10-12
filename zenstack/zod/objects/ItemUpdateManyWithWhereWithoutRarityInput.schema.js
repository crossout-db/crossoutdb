"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateManyWithWhereWithoutRarityInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemScalarWhereInput_schema_1 = require("./ItemScalarWhereInput.schema");
const ItemUpdateManyMutationInput_schema_1 = require("./ItemUpdateManyMutationInput.schema");
const ItemUncheckedUpdateManyWithoutRarityInput_schema_1 = require("./ItemUncheckedUpdateManyWithoutRarityInput.schema");
exports.ItemUpdateManyWithWhereWithoutRarityInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemScalarWhereInput_schema_1.ItemScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateManyMutationInput_schema_1.ItemUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateManyWithoutRarityInput_schema_1.ItemUncheckedUpdateManyWithoutRarityInputObjectSchema)])
}).strict();
