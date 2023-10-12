"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateWithWhereUniqueWithoutRarityInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateWithoutRarityInput_schema_1 = require("./ItemUpdateWithoutRarityInput.schema");
const ItemUncheckedUpdateWithoutRarityInput_schema_1 = require("./ItemUncheckedUpdateWithoutRarityInput.schema");
exports.ItemUpdateWithWhereUniqueWithoutRarityInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutRarityInput_schema_1.ItemUpdateWithoutRarityInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutRarityInput_schema_1.ItemUncheckedUpdateWithoutRarityInputObjectSchema)])
}).strict();
