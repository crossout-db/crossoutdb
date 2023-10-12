"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpsertWithWhereUniqueWithoutRarityInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateWithoutRarityInput_schema_1 = require("./ItemUpdateWithoutRarityInput.schema");
const ItemUncheckedUpdateWithoutRarityInput_schema_1 = require("./ItemUncheckedUpdateWithoutRarityInput.schema");
const ItemCreateWithoutRarityInput_schema_1 = require("./ItemCreateWithoutRarityInput.schema");
const ItemUncheckedCreateWithoutRarityInput_schema_1 = require("./ItemUncheckedCreateWithoutRarityInput.schema");
exports.ItemUpsertWithWhereUniqueWithoutRarityInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutRarityInput_schema_1.ItemUpdateWithoutRarityInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutRarityInput_schema_1.ItemUncheckedUpdateWithoutRarityInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutRarityInput_schema_1.ItemCreateWithoutRarityInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutRarityInput_schema_1.ItemUncheckedCreateWithoutRarityInputObjectSchema)])
}).strict();
