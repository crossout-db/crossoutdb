"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateToOneWithWhereWithoutRecipesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
const ItemUpdateWithoutRecipesInput_schema_1 = require("./ItemUpdateWithoutRecipesInput.schema");
const ItemUncheckedUpdateWithoutRecipesInput_schema_1 = require("./ItemUncheckedUpdateWithoutRecipesInput.schema");
exports.ItemUpdateToOneWithWhereWithoutRecipesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutRecipesInput_schema_1.ItemUpdateWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutRecipesInput_schema_1.ItemUncheckedUpdateWithoutRecipesInputObjectSchema)])
}).strict();
