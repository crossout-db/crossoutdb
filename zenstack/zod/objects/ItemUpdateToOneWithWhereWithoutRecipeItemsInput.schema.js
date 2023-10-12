"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateToOneWithWhereWithoutRecipeItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
const ItemUpdateWithoutRecipeItemsInput_schema_1 = require("./ItemUpdateWithoutRecipeItemsInput.schema");
const ItemUncheckedUpdateWithoutRecipeItemsInput_schema_1 = require("./ItemUncheckedUpdateWithoutRecipeItemsInput.schema");
exports.ItemUpdateToOneWithWhereWithoutRecipeItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutRecipeItemsInput_schema_1.ItemUpdateWithoutRecipeItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutRecipeItemsInput_schema_1.ItemUncheckedUpdateWithoutRecipeItemsInputObjectSchema)])
}).strict();
