"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateNestedManyWithoutTypeInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutTypeInput_schema_1 = require("./ItemCreateWithoutTypeInput.schema");
const ItemUncheckedCreateWithoutTypeInput_schema_1 = require("./ItemUncheckedCreateWithoutTypeInput.schema");
const ItemCreateOrConnectWithoutTypeInput_schema_1 = require("./ItemCreateOrConnectWithoutTypeInput.schema");
const ItemCreateManyTypeInputEnvelope_schema_1 = require("./ItemCreateManyTypeInputEnvelope.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
exports.ItemCreateNestedManyWithoutTypeInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutTypeInput_schema_1.ItemCreateWithoutTypeInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateWithoutTypeInput_schema_1.ItemCreateWithoutTypeInputObjectSchema).array(),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutTypeInput_schema_1.ItemUncheckedCreateWithoutTypeInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutTypeInput_schema_1.ItemUncheckedCreateWithoutTypeInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ItemCreateOrConnectWithoutTypeInput_schema_1.ItemCreateOrConnectWithoutTypeInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateOrConnectWithoutTypeInput_schema_1.ItemCreateOrConnectWithoutTypeInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ItemCreateManyTypeInputEnvelope_schema_1.ItemCreateManyTypeInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
