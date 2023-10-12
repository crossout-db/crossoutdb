"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeCreateOrConnectWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const BadgeExchangeWhereUniqueInput_schema_1 = require("./BadgeExchangeWhereUniqueInput.schema");
const BadgeExchangeCreateWithoutItemInput_schema_1 = require("./BadgeExchangeCreateWithoutItemInput.schema");
const BadgeExchangeUncheckedCreateWithoutItemInput_schema_1 = require("./BadgeExchangeUncheckedCreateWithoutItemInput.schema");
exports.BadgeExchangeCreateOrConnectWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeCreateWithoutItemInput_schema_1.BadgeExchangeCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeUncheckedCreateWithoutItemInput_schema_1.BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
