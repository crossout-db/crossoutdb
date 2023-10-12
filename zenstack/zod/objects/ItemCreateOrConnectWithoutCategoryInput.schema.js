"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateOrConnectWithoutCategoryInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemCreateWithoutCategoryInput_schema_1 = require("./ItemCreateWithoutCategoryInput.schema");
const ItemUncheckedCreateWithoutCategoryInput_schema_1 = require("./ItemUncheckedCreateWithoutCategoryInput.schema");
exports.ItemCreateOrConnectWithoutCategoryInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutCategoryInput_schema_1.ItemCreateWithoutCategoryInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutCategoryInput_schema_1.ItemUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
