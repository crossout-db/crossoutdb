"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateOneRequiredWithoutRecipeItemsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutRecipeItemsInput_schema_1 = require("./ItemCreateWithoutRecipeItemsInput.schema");
const ItemUncheckedCreateWithoutRecipeItemsInput_schema_1 = require("./ItemUncheckedCreateWithoutRecipeItemsInput.schema");
const ItemCreateOrConnectWithoutRecipeItemsInput_schema_1 = require("./ItemCreateOrConnectWithoutRecipeItemsInput.schema");
const ItemUpsertWithoutRecipeItemsInput_schema_1 = require("./ItemUpsertWithoutRecipeItemsInput.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateToOneWithWhereWithoutRecipeItemsInput_schema_1 = require("./ItemUpdateToOneWithWhereWithoutRecipeItemsInput.schema");
const ItemUpdateWithoutRecipeItemsInput_schema_1 = require("./ItemUpdateWithoutRecipeItemsInput.schema");
const ItemUncheckedUpdateWithoutRecipeItemsInput_schema_1 = require("./ItemUncheckedUpdateWithoutRecipeItemsInput.schema");
exports.ItemUpdateOneRequiredWithoutRecipeItemsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutRecipeItemsInput_schema_1.ItemCreateWithoutRecipeItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutRecipeItemsInput_schema_1.ItemUncheckedCreateWithoutRecipeItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ItemCreateOrConnectWithoutRecipeItemsInput_schema_1.ItemCreateOrConnectWithoutRecipeItemsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ItemUpsertWithoutRecipeItemsInput_schema_1.ItemUpsertWithoutRecipeItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateToOneWithWhereWithoutRecipeItemsInput_schema_1.ItemUpdateToOneWithWhereWithoutRecipeItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateWithoutRecipeItemsInput_schema_1.ItemUpdateWithoutRecipeItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutRecipeItemsInput_schema_1.ItemUncheckedUpdateWithoutRecipeItemsInputObjectSchema)]).optional()
}).strict();
