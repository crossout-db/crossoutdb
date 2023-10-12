"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateOrConnectWithoutRecipesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemCreateWithoutRecipesInput_schema_1 = require("./ItemCreateWithoutRecipesInput.schema");
const ItemUncheckedCreateWithoutRecipesInput_schema_1 = require("./ItemUncheckedCreateWithoutRecipesInput.schema");
exports.ItemCreateOrConnectWithoutRecipesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutRecipesInput_schema_1.ItemCreateWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutRecipesInput_schema_1.ItemUncheckedCreateWithoutRecipesInputObjectSchema)])
}).strict();
