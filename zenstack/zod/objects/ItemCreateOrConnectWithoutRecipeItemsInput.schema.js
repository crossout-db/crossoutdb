"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateOrConnectWithoutRecipeItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemCreateWithoutRecipeItemsInput_schema_1 = require("./ItemCreateWithoutRecipeItemsInput.schema");
const ItemUncheckedCreateWithoutRecipeItemsInput_schema_1 = require("./ItemUncheckedCreateWithoutRecipeItemsInput.schema");
exports.ItemCreateOrConnectWithoutRecipeItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutRecipeItemsInput_schema_1.ItemCreateWithoutRecipeItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutRecipeItemsInput_schema_1.ItemUncheckedCreateWithoutRecipeItemsInputObjectSchema)])
}).strict();
