"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateToOneWithWhereWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const CategoryWhereInput_schema_1 = require("./CategoryWhereInput.schema");
const CategoryUpdateWithoutItemsInput_schema_1 = require("./CategoryUpdateWithoutItemsInput.schema");
const CategoryUncheckedUpdateWithoutItemsInput_schema_1 = require("./CategoryUncheckedUpdateWithoutItemsInput.schema");
exports.CategoryUpdateToOneWithWhereWithoutItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => CategoryWhereInput_schema_1.CategoryWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => CategoryUpdateWithoutItemsInput_schema_1.CategoryUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => CategoryUncheckedUpdateWithoutItemsInput_schema_1.CategoryUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();
