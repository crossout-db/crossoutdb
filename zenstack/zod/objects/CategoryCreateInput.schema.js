"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateNestedManyWithoutCategoryInput_schema_1 = require("./ItemCreateNestedManyWithoutCategoryInput.schema");
exports.CategoryCreateInputObjectSchema = zod_1.z.object({
    name: zod_1.z.string(), items: zod_1.z.lazy(() => ItemCreateNestedManyWithoutCategoryInput_schema_1.ItemCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
