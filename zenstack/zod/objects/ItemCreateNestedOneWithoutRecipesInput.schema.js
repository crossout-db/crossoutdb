"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateNestedOneWithoutRecipesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutRecipesInput_schema_1 = require("./ItemCreateWithoutRecipesInput.schema");
const ItemUncheckedCreateWithoutRecipesInput_schema_1 = require("./ItemUncheckedCreateWithoutRecipesInput.schema");
const ItemCreateOrConnectWithoutRecipesInput_schema_1 = require("./ItemCreateOrConnectWithoutRecipesInput.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
exports.ItemCreateNestedOneWithoutRecipesInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutRecipesInput_schema_1.ItemCreateWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutRecipesInput_schema_1.ItemUncheckedCreateWithoutRecipesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ItemCreateOrConnectWithoutRecipesInput_schema_1.ItemCreateOrConnectWithoutRecipesInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).optional()
}).strict();
