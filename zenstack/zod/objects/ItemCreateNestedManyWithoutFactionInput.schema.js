"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateNestedManyWithoutFactionInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutFactionInput_schema_1 = require("./ItemCreateWithoutFactionInput.schema");
const ItemUncheckedCreateWithoutFactionInput_schema_1 = require("./ItemUncheckedCreateWithoutFactionInput.schema");
const ItemCreateOrConnectWithoutFactionInput_schema_1 = require("./ItemCreateOrConnectWithoutFactionInput.schema");
const ItemCreateManyFactionInputEnvelope_schema_1 = require("./ItemCreateManyFactionInputEnvelope.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
exports.ItemCreateNestedManyWithoutFactionInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutFactionInput_schema_1.ItemCreateWithoutFactionInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateWithoutFactionInput_schema_1.ItemCreateWithoutFactionInputObjectSchema).array(),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutFactionInput_schema_1.ItemUncheckedCreateWithoutFactionInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutFactionInput_schema_1.ItemUncheckedCreateWithoutFactionInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ItemCreateOrConnectWithoutFactionInput_schema_1.ItemCreateOrConnectWithoutFactionInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateOrConnectWithoutFactionInput_schema_1.ItemCreateOrConnectWithoutFactionInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ItemCreateManyFactionInputEnvelope_schema_1.ItemCreateManyFactionInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
