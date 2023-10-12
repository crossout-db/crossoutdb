"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketUncheckedCreateNestedManyWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const MarketCreateWithoutItemInput_schema_1 = require("./MarketCreateWithoutItemInput.schema");
const MarketUncheckedCreateWithoutItemInput_schema_1 = require("./MarketUncheckedCreateWithoutItemInput.schema");
const MarketCreateOrConnectWithoutItemInput_schema_1 = require("./MarketCreateOrConnectWithoutItemInput.schema");
const MarketCreateManyItemInputEnvelope_schema_1 = require("./MarketCreateManyItemInputEnvelope.schema");
const MarketWhereUniqueInput_schema_1 = require("./MarketWhereUniqueInput.schema");
exports.MarketUncheckedCreateNestedManyWithoutItemInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MarketCreateWithoutItemInput_schema_1.MarketCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => MarketCreateWithoutItemInput_schema_1.MarketCreateWithoutItemInputObjectSchema).array(),
        zod_1.z.lazy(() => MarketUncheckedCreateWithoutItemInput_schema_1.MarketUncheckedCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => MarketUncheckedCreateWithoutItemInput_schema_1.MarketUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => MarketCreateOrConnectWithoutItemInput_schema_1.MarketCreateOrConnectWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => MarketCreateOrConnectWithoutItemInput_schema_1.MarketCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => MarketCreateManyItemInputEnvelope_schema_1.MarketCreateManyItemInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => MarketWhereUniqueInput_schema_1.MarketWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MarketWhereUniqueInput_schema_1.MarketWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
