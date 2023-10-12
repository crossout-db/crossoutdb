"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeUpdateManyWithoutItemNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const BadgeExchangeCreateWithoutItemInput_schema_1 = require("./BadgeExchangeCreateWithoutItemInput.schema");
const BadgeExchangeUncheckedCreateWithoutItemInput_schema_1 = require("./BadgeExchangeUncheckedCreateWithoutItemInput.schema");
const BadgeExchangeCreateOrConnectWithoutItemInput_schema_1 = require("./BadgeExchangeCreateOrConnectWithoutItemInput.schema");
const BadgeExchangeUpsertWithWhereUniqueWithoutItemInput_schema_1 = require("./BadgeExchangeUpsertWithWhereUniqueWithoutItemInput.schema");
const BadgeExchangeCreateManyItemInputEnvelope_schema_1 = require("./BadgeExchangeCreateManyItemInputEnvelope.schema");
const BadgeExchangeWhereUniqueInput_schema_1 = require("./BadgeExchangeWhereUniqueInput.schema");
const BadgeExchangeUpdateWithWhereUniqueWithoutItemInput_schema_1 = require("./BadgeExchangeUpdateWithWhereUniqueWithoutItemInput.schema");
const BadgeExchangeUpdateManyWithWhereWithoutItemInput_schema_1 = require("./BadgeExchangeUpdateManyWithWhereWithoutItemInput.schema");
const BadgeExchangeScalarWhereInput_schema_1 = require("./BadgeExchangeScalarWhereInput.schema");
exports.BadgeExchangeUpdateManyWithoutItemNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeCreateWithoutItemInput_schema_1.BadgeExchangeCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeCreateWithoutItemInput_schema_1.BadgeExchangeCreateWithoutItemInputObjectSchema).array(),
        zod_1.z.lazy(() => BadgeExchangeUncheckedCreateWithoutItemInput_schema_1.BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeUncheckedCreateWithoutItemInput_schema_1.BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeCreateOrConnectWithoutItemInput_schema_1.BadgeExchangeCreateOrConnectWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeCreateOrConnectWithoutItemInput_schema_1.BadgeExchangeCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeUpsertWithWhereUniqueWithoutItemInput_schema_1.BadgeExchangeUpsertWithWhereUniqueWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeUpsertWithWhereUniqueWithoutItemInput_schema_1.BadgeExchangeUpsertWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => BadgeExchangeCreateManyItemInputEnvelope_schema_1.BadgeExchangeCreateManyItemInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeUpdateWithWhereUniqueWithoutItemInput_schema_1.BadgeExchangeUpdateWithWhereUniqueWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeUpdateWithWhereUniqueWithoutItemInput_schema_1.BadgeExchangeUpdateWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeUpdateManyWithWhereWithoutItemInput_schema_1.BadgeExchangeUpdateManyWithWhereWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeUpdateManyWithWhereWithoutItemInput_schema_1.BadgeExchangeUpdateManyWithWhereWithoutItemInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeScalarWhereInput_schema_1.BadgeExchangeScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeScalarWhereInput_schema_1.BadgeExchangeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
