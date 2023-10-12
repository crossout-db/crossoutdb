"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpsertWithoutRecipesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemUpdateWithoutRecipesInput_schema_1 = require("./ItemUpdateWithoutRecipesInput.schema");
const ItemUncheckedUpdateWithoutRecipesInput_schema_1 = require("./ItemUncheckedUpdateWithoutRecipesInput.schema");
const ItemCreateWithoutRecipesInput_schema_1 = require("./ItemCreateWithoutRecipesInput.schema");
const ItemUncheckedCreateWithoutRecipesInput_schema_1 = require("./ItemUncheckedCreateWithoutRecipesInput.schema");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.ItemUpsertWithoutRecipesInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutRecipesInput_schema_1.ItemUpdateWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutRecipesInput_schema_1.ItemUncheckedUpdateWithoutRecipesInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutRecipesInput_schema_1.ItemCreateWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutRecipesInput_schema_1.ItemUncheckedCreateWithoutRecipesInputObjectSchema)]), where: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional()
}).strict();
