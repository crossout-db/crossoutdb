"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUncheckedUpdateManyWithoutTypeNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutTypeInput_schema_1 = require("./ItemCreateWithoutTypeInput.schema");
const ItemUncheckedCreateWithoutTypeInput_schema_1 = require("./ItemUncheckedCreateWithoutTypeInput.schema");
const ItemCreateOrConnectWithoutTypeInput_schema_1 = require("./ItemCreateOrConnectWithoutTypeInput.schema");
const ItemUpsertWithWhereUniqueWithoutTypeInput_schema_1 = require("./ItemUpsertWithWhereUniqueWithoutTypeInput.schema");
const ItemCreateManyTypeInputEnvelope_schema_1 = require("./ItemCreateManyTypeInputEnvelope.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateWithWhereUniqueWithoutTypeInput_schema_1 = require("./ItemUpdateWithWhereUniqueWithoutTypeInput.schema");
const ItemUpdateManyWithWhereWithoutTypeInput_schema_1 = require("./ItemUpdateManyWithWhereWithoutTypeInput.schema");
const ItemScalarWhereInput_schema_1 = require("./ItemScalarWhereInput.schema");
exports.ItemUncheckedUpdateManyWithoutTypeNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutTypeInput_schema_1.ItemCreateWithoutTypeInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateWithoutTypeInput_schema_1.ItemCreateWithoutTypeInputObjectSchema).array(),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutTypeInput_schema_1.ItemUncheckedCreateWithoutTypeInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutTypeInput_schema_1.ItemUncheckedCreateWithoutTypeInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ItemCreateOrConnectWithoutTypeInput_schema_1.ItemCreateOrConnectWithoutTypeInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateOrConnectWithoutTypeInput_schema_1.ItemCreateOrConnectWithoutTypeInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => ItemUpsertWithWhereUniqueWithoutTypeInput_schema_1.ItemUpsertWithWhereUniqueWithoutTypeInputObjectSchema),
        zod_1.z.lazy(() => ItemUpsertWithWhereUniqueWithoutTypeInput_schema_1.ItemUpsertWithWhereUniqueWithoutTypeInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ItemCreateManyTypeInputEnvelope_schema_1.ItemCreateManyTypeInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithWhereUniqueWithoutTypeInput_schema_1.ItemUpdateWithWhereUniqueWithoutTypeInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateWithWhereUniqueWithoutTypeInput_schema_1.ItemUpdateWithWhereUniqueWithoutTypeInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateManyWithWhereWithoutTypeInput_schema_1.ItemUpdateManyWithWhereWithoutTypeInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateManyWithWhereWithoutTypeInput_schema_1.ItemUpdateManyWithWhereWithoutTypeInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => ItemScalarWhereInput_schema_1.ItemScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ItemScalarWhereInput_schema_1.ItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
