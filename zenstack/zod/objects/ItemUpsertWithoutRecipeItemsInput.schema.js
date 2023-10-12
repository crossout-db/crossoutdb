"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpsertWithoutRecipeItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemUpdateWithoutRecipeItemsInput_schema_1 = require("./ItemUpdateWithoutRecipeItemsInput.schema");
const ItemUncheckedUpdateWithoutRecipeItemsInput_schema_1 = require("./ItemUncheckedUpdateWithoutRecipeItemsInput.schema");
const ItemCreateWithoutRecipeItemsInput_schema_1 = require("./ItemCreateWithoutRecipeItemsInput.schema");
const ItemUncheckedCreateWithoutRecipeItemsInput_schema_1 = require("./ItemUncheckedCreateWithoutRecipeItemsInput.schema");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.ItemUpsertWithoutRecipeItemsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutRecipeItemsInput_schema_1.ItemUpdateWithoutRecipeItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutRecipeItemsInput_schema_1.ItemUncheckedUpdateWithoutRecipeItemsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutRecipeItemsInput_schema_1.ItemCreateWithoutRecipeItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutRecipeItemsInput_schema_1.ItemUncheckedCreateWithoutRecipeItemsInputObjectSchema)]), where: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional()
}).strict();
