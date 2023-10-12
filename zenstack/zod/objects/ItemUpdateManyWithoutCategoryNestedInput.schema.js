"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateManyWithoutCategoryNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutCategoryInput_schema_1 = require("./ItemCreateWithoutCategoryInput.schema");
const ItemUncheckedCreateWithoutCategoryInput_schema_1 = require("./ItemUncheckedCreateWithoutCategoryInput.schema");
const ItemCreateOrConnectWithoutCategoryInput_schema_1 = require("./ItemCreateOrConnectWithoutCategoryInput.schema");
const ItemUpsertWithWhereUniqueWithoutCategoryInput_schema_1 = require("./ItemUpsertWithWhereUniqueWithoutCategoryInput.schema");
const ItemCreateManyCategoryInputEnvelope_schema_1 = require("./ItemCreateManyCategoryInputEnvelope.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateWithWhereUniqueWithoutCategoryInput_schema_1 = require("./ItemUpdateWithWhereUniqueWithoutCategoryInput.schema");
const ItemUpdateManyWithWhereWithoutCategoryInput_schema_1 = require("./ItemUpdateManyWithWhereWithoutCategoryInput.schema");
const ItemScalarWhereInput_schema_1 = require("./ItemScalarWhereInput.schema");
exports.ItemUpdateManyWithoutCategoryNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutCategoryInput_schema_1.ItemCreateWithoutCategoryInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateWithoutCategoryInput_schema_1.ItemCreateWithoutCategoryInputObjectSchema).array(),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutCategoryInput_schema_1.ItemUncheckedCreateWithoutCategoryInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutCategoryInput_schema_1.ItemUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ItemCreateOrConnectWithoutCategoryInput_schema_1.ItemCreateOrConnectWithoutCategoryInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateOrConnectWithoutCategoryInput_schema_1.ItemCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => ItemUpsertWithWhereUniqueWithoutCategoryInput_schema_1.ItemUpsertWithWhereUniqueWithoutCategoryInputObjectSchema),
        zod_1.z.lazy(() => ItemUpsertWithWhereUniqueWithoutCategoryInput_schema_1.ItemUpsertWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ItemCreateManyCategoryInputEnvelope_schema_1.ItemCreateManyCategoryInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithWhereUniqueWithoutCategoryInput_schema_1.ItemUpdateWithWhereUniqueWithoutCategoryInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateWithWhereUniqueWithoutCategoryInput_schema_1.ItemUpdateWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateManyWithWhereWithoutCategoryInput_schema_1.ItemUpdateManyWithWhereWithoutCategoryInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateManyWithWhereWithoutCategoryInput_schema_1.ItemUpdateManyWithWhereWithoutCategoryInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => ItemScalarWhereInput_schema_1.ItemScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ItemScalarWhereInput_schema_1.ItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
