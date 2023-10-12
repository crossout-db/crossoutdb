"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateWithWhereUniqueWithoutCategoryInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateWithoutCategoryInput_schema_1 = require("./ItemUpdateWithoutCategoryInput.schema");
const ItemUncheckedUpdateWithoutCategoryInput_schema_1 = require("./ItemUncheckedUpdateWithoutCategoryInput.schema");
exports.ItemUpdateWithWhereUniqueWithoutCategoryInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutCategoryInput_schema_1.ItemUpdateWithoutCategoryInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutCategoryInput_schema_1.ItemUncheckedUpdateWithoutCategoryInputObjectSchema)])
}).strict();
