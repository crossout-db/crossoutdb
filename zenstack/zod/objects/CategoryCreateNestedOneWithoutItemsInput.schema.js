"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateNestedOneWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const CategoryCreateWithoutItemsInput_schema_1 = require("./CategoryCreateWithoutItemsInput.schema");
const CategoryUncheckedCreateWithoutItemsInput_schema_1 = require("./CategoryUncheckedCreateWithoutItemsInput.schema");
const CategoryCreateOrConnectWithoutItemsInput_schema_1 = require("./CategoryCreateOrConnectWithoutItemsInput.schema");
const CategoryWhereUniqueInput_schema_1 = require("./CategoryWhereUniqueInput.schema");
exports.CategoryCreateNestedOneWithoutItemsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => CategoryCreateWithoutItemsInput_schema_1.CategoryCreateWithoutItemsInputObjectSchema),
        zod_1.z.lazy(() => CategoryUncheckedCreateWithoutItemsInput_schema_1.CategoryUncheckedCreateWithoutItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => CategoryCreateOrConnectWithoutItemsInput_schema_1.CategoryCreateOrConnectWithoutItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => CategoryWhereUniqueInput_schema_1.CategoryWhereUniqueInputObjectSchema).optional()
}).strict();
