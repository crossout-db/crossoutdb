"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpsertWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const CategoryUpdateWithoutItemsInput_schema_1 = require("./CategoryUpdateWithoutItemsInput.schema");
const CategoryUncheckedUpdateWithoutItemsInput_schema_1 = require("./CategoryUncheckedUpdateWithoutItemsInput.schema");
const CategoryCreateWithoutItemsInput_schema_1 = require("./CategoryCreateWithoutItemsInput.schema");
const CategoryUncheckedCreateWithoutItemsInput_schema_1 = require("./CategoryUncheckedCreateWithoutItemsInput.schema");
const CategoryWhereInput_schema_1 = require("./CategoryWhereInput.schema");
exports.CategoryUpsertWithoutItemsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => CategoryUpdateWithoutItemsInput_schema_1.CategoryUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => CategoryUncheckedUpdateWithoutItemsInput_schema_1.CategoryUncheckedUpdateWithoutItemsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => CategoryCreateWithoutItemsInput_schema_1.CategoryCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => CategoryUncheckedCreateWithoutItemsInput_schema_1.CategoryUncheckedCreateWithoutItemsInputObjectSchema)]), where: zod_1.z.lazy(() => CategoryWhereInput_schema_1.CategoryWhereInputObjectSchema).optional()
}).strict();
