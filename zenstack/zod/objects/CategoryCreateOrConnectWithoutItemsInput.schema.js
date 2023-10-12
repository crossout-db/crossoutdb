"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateOrConnectWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const CategoryWhereUniqueInput_schema_1 = require("./CategoryWhereUniqueInput.schema");
const CategoryCreateWithoutItemsInput_schema_1 = require("./CategoryCreateWithoutItemsInput.schema");
const CategoryUncheckedCreateWithoutItemsInput_schema_1 = require("./CategoryUncheckedCreateWithoutItemsInput.schema");
exports.CategoryCreateOrConnectWithoutItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => CategoryWhereUniqueInput_schema_1.CategoryWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => CategoryCreateWithoutItemsInput_schema_1.CategoryCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => CategoryUncheckedCreateWithoutItemsInput_schema_1.CategoryUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();
