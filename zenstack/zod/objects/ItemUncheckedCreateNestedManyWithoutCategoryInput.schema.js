"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUncheckedCreateNestedManyWithoutCategoryInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutCategoryInput_schema_1 = require("./ItemCreateWithoutCategoryInput.schema");
const ItemUncheckedCreateWithoutCategoryInput_schema_1 = require("./ItemUncheckedCreateWithoutCategoryInput.schema");
const ItemCreateOrConnectWithoutCategoryInput_schema_1 = require("./ItemCreateOrConnectWithoutCategoryInput.schema");
const ItemCreateManyCategoryInputEnvelope_schema_1 = require("./ItemCreateManyCategoryInputEnvelope.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
exports.ItemUncheckedCreateNestedManyWithoutCategoryInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutCategoryInput_schema_1.ItemCreateWithoutCategoryInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateWithoutCategoryInput_schema_1.ItemCreateWithoutCategoryInputObjectSchema).array(),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutCategoryInput_schema_1.ItemUncheckedCreateWithoutCategoryInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutCategoryInput_schema_1.ItemUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ItemCreateOrConnectWithoutCategoryInput_schema_1.ItemCreateOrConnectWithoutCategoryInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateOrConnectWithoutCategoryInput_schema_1.ItemCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ItemCreateManyCategoryInputEnvelope_schema_1.ItemCreateManyCategoryInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
