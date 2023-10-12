"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeCreateNestedManyWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const BadgeExchangeCreateWithoutItemInput_schema_1 = require("./BadgeExchangeCreateWithoutItemInput.schema");
const BadgeExchangeUncheckedCreateWithoutItemInput_schema_1 = require("./BadgeExchangeUncheckedCreateWithoutItemInput.schema");
const BadgeExchangeCreateOrConnectWithoutItemInput_schema_1 = require("./BadgeExchangeCreateOrConnectWithoutItemInput.schema");
const BadgeExchangeCreateManyItemInputEnvelope_schema_1 = require("./BadgeExchangeCreateManyItemInputEnvelope.schema");
const BadgeExchangeWhereUniqueInput_schema_1 = require("./BadgeExchangeWhereUniqueInput.schema");
exports.BadgeExchangeCreateNestedManyWithoutItemInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeCreateWithoutItemInput_schema_1.BadgeExchangeCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeCreateWithoutItemInput_schema_1.BadgeExchangeCreateWithoutItemInputObjectSchema).array(),
        zod_1.z.lazy(() => BadgeExchangeUncheckedCreateWithoutItemInput_schema_1.BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeUncheckedCreateWithoutItemInput_schema_1.BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeCreateOrConnectWithoutItemInput_schema_1.BadgeExchangeCreateOrConnectWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeCreateOrConnectWithoutItemInput_schema_1.BadgeExchangeCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => BadgeExchangeCreateManyItemInputEnvelope_schema_1.BadgeExchangeCreateManyItemInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
