"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeUpsertWithWhereUniqueWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const BadgeExchangeWhereUniqueInput_schema_1 = require("./BadgeExchangeWhereUniqueInput.schema");
const BadgeExchangeUpdateWithoutItemInput_schema_1 = require("./BadgeExchangeUpdateWithoutItemInput.schema");
const BadgeExchangeUncheckedUpdateWithoutItemInput_schema_1 = require("./BadgeExchangeUncheckedUpdateWithoutItemInput.schema");
const BadgeExchangeCreateWithoutItemInput_schema_1 = require("./BadgeExchangeCreateWithoutItemInput.schema");
const BadgeExchangeUncheckedCreateWithoutItemInput_schema_1 = require("./BadgeExchangeUncheckedCreateWithoutItemInput.schema");
exports.BadgeExchangeUpsertWithWhereUniqueWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeUpdateWithoutItemInput_schema_1.BadgeExchangeUpdateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeUncheckedUpdateWithoutItemInput_schema_1.BadgeExchangeUncheckedUpdateWithoutItemInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeCreateWithoutItemInput_schema_1.BadgeExchangeCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeUncheckedCreateWithoutItemInput_schema_1.BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
