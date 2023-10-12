"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUncheckedCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemUncheckedCreateNestedManyWithoutCategoryInput_schema_1 = require("./ItemUncheckedCreateNestedManyWithoutCategoryInput.schema");
exports.CategoryUncheckedCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), name: zod_1.z.string(), items: zod_1.z.lazy(() => ItemUncheckedCreateNestedManyWithoutCategoryInput_schema_1.ItemUncheckedCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
