"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketUpdateManyWithoutItemNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const MarketCreateWithoutItemInput_schema_1 = require("./MarketCreateWithoutItemInput.schema");
const MarketUncheckedCreateWithoutItemInput_schema_1 = require("./MarketUncheckedCreateWithoutItemInput.schema");
const MarketCreateOrConnectWithoutItemInput_schema_1 = require("./MarketCreateOrConnectWithoutItemInput.schema");
const MarketUpsertWithWhereUniqueWithoutItemInput_schema_1 = require("./MarketUpsertWithWhereUniqueWithoutItemInput.schema");
const MarketCreateManyItemInputEnvelope_schema_1 = require("./MarketCreateManyItemInputEnvelope.schema");
const MarketWhereUniqueInput_schema_1 = require("./MarketWhereUniqueInput.schema");
const MarketUpdateWithWhereUniqueWithoutItemInput_schema_1 = require("./MarketUpdateWithWhereUniqueWithoutItemInput.schema");
const MarketUpdateManyWithWhereWithoutItemInput_schema_1 = require("./MarketUpdateManyWithWhereWithoutItemInput.schema");
const MarketScalarWhereInput_schema_1 = require("./MarketScalarWhereInput.schema");
exports.MarketUpdateManyWithoutItemNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MarketCreateWithoutItemInput_schema_1.MarketCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => MarketCreateWithoutItemInput_schema_1.MarketCreateWithoutItemInputObjectSchema).array(),
        zod_1.z.lazy(() => MarketUncheckedCreateWithoutItemInput_schema_1.MarketUncheckedCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => MarketUncheckedCreateWithoutItemInput_schema_1.MarketUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => MarketCreateOrConnectWithoutItemInput_schema_1.MarketCreateOrConnectWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => MarketCreateOrConnectWithoutItemInput_schema_1.MarketCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => MarketUpsertWithWhereUniqueWithoutItemInput_schema_1.MarketUpsertWithWhereUniqueWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => MarketUpsertWithWhereUniqueWithoutItemInput_schema_1.MarketUpsertWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => MarketCreateManyItemInputEnvelope_schema_1.MarketCreateManyItemInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => MarketWhereUniqueInput_schema_1.MarketWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MarketWhereUniqueInput_schema_1.MarketWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => MarketWhereUniqueInput_schema_1.MarketWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MarketWhereUniqueInput_schema_1.MarketWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => MarketWhereUniqueInput_schema_1.MarketWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MarketWhereUniqueInput_schema_1.MarketWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => MarketWhereUniqueInput_schema_1.MarketWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MarketWhereUniqueInput_schema_1.MarketWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => MarketUpdateWithWhereUniqueWithoutItemInput_schema_1.MarketUpdateWithWhereUniqueWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => MarketUpdateWithWhereUniqueWithoutItemInput_schema_1.MarketUpdateWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => MarketUpdateManyWithWhereWithoutItemInput_schema_1.MarketUpdateManyWithWhereWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => MarketUpdateManyWithWhereWithoutItemInput_schema_1.MarketUpdateManyWithWhereWithoutItemInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => MarketScalarWhereInput_schema_1.MarketScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => MarketScalarWhereInput_schema_1.MarketScalarWhereInputObjectSchema).array()]).optional()
}).strict();
