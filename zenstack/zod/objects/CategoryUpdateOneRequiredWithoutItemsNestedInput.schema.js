"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateOneRequiredWithoutItemsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const CategoryCreateWithoutItemsInput_schema_1 = require("./CategoryCreateWithoutItemsInput.schema");
const CategoryUncheckedCreateWithoutItemsInput_schema_1 = require("./CategoryUncheckedCreateWithoutItemsInput.schema");
const CategoryCreateOrConnectWithoutItemsInput_schema_1 = require("./CategoryCreateOrConnectWithoutItemsInput.schema");
const CategoryUpsertWithoutItemsInput_schema_1 = require("./CategoryUpsertWithoutItemsInput.schema");
const CategoryWhereUniqueInput_schema_1 = require("./CategoryWhereUniqueInput.schema");
const CategoryUpdateToOneWithWhereWithoutItemsInput_schema_1 = require("./CategoryUpdateToOneWithWhereWithoutItemsInput.schema");
const CategoryUpdateWithoutItemsInput_schema_1 = require("./CategoryUpdateWithoutItemsInput.schema");
const CategoryUncheckedUpdateWithoutItemsInput_schema_1 = require("./CategoryUncheckedUpdateWithoutItemsInput.schema");
exports.CategoryUpdateOneRequiredWithoutItemsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => CategoryCreateWithoutItemsInput_schema_1.CategoryCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => CategoryUncheckedCreateWithoutItemsInput_schema_1.CategoryUncheckedCreateWithoutItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => CategoryCreateOrConnectWithoutItemsInput_schema_1.CategoryCreateOrConnectWithoutItemsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => CategoryUpsertWithoutItemsInput_schema_1.CategoryUpsertWithoutItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => CategoryWhereUniqueInput_schema_1.CategoryWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => CategoryUpdateToOneWithWhereWithoutItemsInput_schema_1.CategoryUpdateToOneWithWhereWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => CategoryUpdateWithoutItemsInput_schema_1.CategoryUpdateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => CategoryUncheckedUpdateWithoutItemsInput_schema_1.CategoryUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();
