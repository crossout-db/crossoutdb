"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateOrConnectWithoutRarityInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemCreateWithoutRarityInput_schema_1 = require("./ItemCreateWithoutRarityInput.schema");
const ItemUncheckedCreateWithoutRarityInput_schema_1 = require("./ItemUncheckedCreateWithoutRarityInput.schema");
exports.ItemCreateOrConnectWithoutRarityInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutRarityInput_schema_1.ItemCreateWithoutRarityInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutRarityInput_schema_1.ItemUncheckedCreateWithoutRarityInputObjectSchema)])
}).strict();
