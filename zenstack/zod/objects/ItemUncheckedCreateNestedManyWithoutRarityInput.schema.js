"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUncheckedCreateNestedManyWithoutRarityInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutRarityInput_schema_1 = require("./ItemCreateWithoutRarityInput.schema");
const ItemUncheckedCreateWithoutRarityInput_schema_1 = require("./ItemUncheckedCreateWithoutRarityInput.schema");
const ItemCreateOrConnectWithoutRarityInput_schema_1 = require("./ItemCreateOrConnectWithoutRarityInput.schema");
const ItemCreateManyRarityInputEnvelope_schema_1 = require("./ItemCreateManyRarityInputEnvelope.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
exports.ItemUncheckedCreateNestedManyWithoutRarityInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutRarityInput_schema_1.ItemCreateWithoutRarityInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateWithoutRarityInput_schema_1.ItemCreateWithoutRarityInputObjectSchema).array(),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutRarityInput_schema_1.ItemUncheckedCreateWithoutRarityInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutRarityInput_schema_1.ItemUncheckedCreateWithoutRarityInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ItemCreateOrConnectWithoutRarityInput_schema_1.ItemCreateOrConnectWithoutRarityInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateOrConnectWithoutRarityInput_schema_1.ItemCreateOrConnectWithoutRarityInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ItemCreateManyRarityInputEnvelope_schema_1.ItemCreateManyRarityInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
