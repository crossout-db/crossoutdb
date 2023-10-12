"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateManyWithoutFactionNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutFactionInput_schema_1 = require("./ItemCreateWithoutFactionInput.schema");
const ItemUncheckedCreateWithoutFactionInput_schema_1 = require("./ItemUncheckedCreateWithoutFactionInput.schema");
const ItemCreateOrConnectWithoutFactionInput_schema_1 = require("./ItemCreateOrConnectWithoutFactionInput.schema");
const ItemUpsertWithWhereUniqueWithoutFactionInput_schema_1 = require("./ItemUpsertWithWhereUniqueWithoutFactionInput.schema");
const ItemCreateManyFactionInputEnvelope_schema_1 = require("./ItemCreateManyFactionInputEnvelope.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateWithWhereUniqueWithoutFactionInput_schema_1 = require("./ItemUpdateWithWhereUniqueWithoutFactionInput.schema");
const ItemUpdateManyWithWhereWithoutFactionInput_schema_1 = require("./ItemUpdateManyWithWhereWithoutFactionInput.schema");
const ItemScalarWhereInput_schema_1 = require("./ItemScalarWhereInput.schema");
exports.ItemUpdateManyWithoutFactionNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutFactionInput_schema_1.ItemCreateWithoutFactionInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateWithoutFactionInput_schema_1.ItemCreateWithoutFactionInputObjectSchema).array(),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutFactionInput_schema_1.ItemUncheckedCreateWithoutFactionInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutFactionInput_schema_1.ItemUncheckedCreateWithoutFactionInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ItemCreateOrConnectWithoutFactionInput_schema_1.ItemCreateOrConnectWithoutFactionInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateOrConnectWithoutFactionInput_schema_1.ItemCreateOrConnectWithoutFactionInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => ItemUpsertWithWhereUniqueWithoutFactionInput_schema_1.ItemUpsertWithWhereUniqueWithoutFactionInputObjectSchema),
        zod_1.z.lazy(() => ItemUpsertWithWhereUniqueWithoutFactionInput_schema_1.ItemUpsertWithWhereUniqueWithoutFactionInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ItemCreateManyFactionInputEnvelope_schema_1.ItemCreateManyFactionInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithWhereUniqueWithoutFactionInput_schema_1.ItemUpdateWithWhereUniqueWithoutFactionInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateWithWhereUniqueWithoutFactionInput_schema_1.ItemUpdateWithWhereUniqueWithoutFactionInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateManyWithWhereWithoutFactionInput_schema_1.ItemUpdateManyWithWhereWithoutFactionInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateManyWithWhereWithoutFactionInput_schema_1.ItemUpdateManyWithWhereWithoutFactionInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => ItemScalarWhereInput_schema_1.ItemScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ItemScalarWhereInput_schema_1.ItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
