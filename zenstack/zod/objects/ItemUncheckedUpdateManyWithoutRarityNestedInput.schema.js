"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUncheckedUpdateManyWithoutRarityNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutRarityInput_schema_1 = require("./ItemCreateWithoutRarityInput.schema");
const ItemUncheckedCreateWithoutRarityInput_schema_1 = require("./ItemUncheckedCreateWithoutRarityInput.schema");
const ItemCreateOrConnectWithoutRarityInput_schema_1 = require("./ItemCreateOrConnectWithoutRarityInput.schema");
const ItemUpsertWithWhereUniqueWithoutRarityInput_schema_1 = require("./ItemUpsertWithWhereUniqueWithoutRarityInput.schema");
const ItemCreateManyRarityInputEnvelope_schema_1 = require("./ItemCreateManyRarityInputEnvelope.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateWithWhereUniqueWithoutRarityInput_schema_1 = require("./ItemUpdateWithWhereUniqueWithoutRarityInput.schema");
const ItemUpdateManyWithWhereWithoutRarityInput_schema_1 = require("./ItemUpdateManyWithWhereWithoutRarityInput.schema");
const ItemScalarWhereInput_schema_1 = require("./ItemScalarWhereInput.schema");
exports.ItemUncheckedUpdateManyWithoutRarityNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutRarityInput_schema_1.ItemCreateWithoutRarityInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateWithoutRarityInput_schema_1.ItemCreateWithoutRarityInputObjectSchema).array(),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutRarityInput_schema_1.ItemUncheckedCreateWithoutRarityInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutRarityInput_schema_1.ItemUncheckedCreateWithoutRarityInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ItemCreateOrConnectWithoutRarityInput_schema_1.ItemCreateOrConnectWithoutRarityInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateOrConnectWithoutRarityInput_schema_1.ItemCreateOrConnectWithoutRarityInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => ItemUpsertWithWhereUniqueWithoutRarityInput_schema_1.ItemUpsertWithWhereUniqueWithoutRarityInputObjectSchema),
        zod_1.z.lazy(() => ItemUpsertWithWhereUniqueWithoutRarityInput_schema_1.ItemUpsertWithWhereUniqueWithoutRarityInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ItemCreateManyRarityInputEnvelope_schema_1.ItemCreateManyRarityInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithWhereUniqueWithoutRarityInput_schema_1.ItemUpdateWithWhereUniqueWithoutRarityInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateWithWhereUniqueWithoutRarityInput_schema_1.ItemUpdateWithWhereUniqueWithoutRarityInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateManyWithWhereWithoutRarityInput_schema_1.ItemUpdateManyWithWhereWithoutRarityInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateManyWithWhereWithoutRarityInput_schema_1.ItemUpdateManyWithWhereWithoutRarityInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => ItemScalarWhereInput_schema_1.ItemScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ItemScalarWhereInput_schema_1.ItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
