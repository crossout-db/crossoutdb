"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpsertWithWhereUniqueWithoutCategoryInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateWithoutCategoryInput_schema_1 = require("./ItemUpdateWithoutCategoryInput.schema");
const ItemUncheckedUpdateWithoutCategoryInput_schema_1 = require("./ItemUncheckedUpdateWithoutCategoryInput.schema");
const ItemCreateWithoutCategoryInput_schema_1 = require("./ItemCreateWithoutCategoryInput.schema");
const ItemUncheckedCreateWithoutCategoryInput_schema_1 = require("./ItemUncheckedCreateWithoutCategoryInput.schema");
exports.ItemUpsertWithWhereUniqueWithoutCategoryInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutCategoryInput_schema_1.ItemUpdateWithoutCategoryInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutCategoryInput_schema_1.ItemUncheckedUpdateWithoutCategoryInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutCategoryInput_schema_1.ItemCreateWithoutCategoryInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutCategoryInput_schema_1.ItemUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
