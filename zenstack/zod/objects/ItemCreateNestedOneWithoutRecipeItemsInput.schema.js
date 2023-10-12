"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateNestedOneWithoutRecipeItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutRecipeItemsInput_schema_1 = require("./ItemCreateWithoutRecipeItemsInput.schema");
const ItemUncheckedCreateWithoutRecipeItemsInput_schema_1 = require("./ItemUncheckedCreateWithoutRecipeItemsInput.schema");
const ItemCreateOrConnectWithoutRecipeItemsInput_schema_1 = require("./ItemCreateOrConnectWithoutRecipeItemsInput.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
exports.ItemCreateNestedOneWithoutRecipeItemsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutRecipeItemsInput_schema_1.ItemCreateWithoutRecipeItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutRecipeItemsInput_schema_1.ItemUncheckedCreateWithoutRecipeItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ItemCreateOrConnectWithoutRecipeItemsInput_schema_1.ItemCreateOrConnectWithoutRecipeItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).optional()
}).strict();
