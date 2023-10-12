"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeUpdateWithWhereUniqueWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const BadgeExchangeWhereUniqueInput_schema_1 = require("./BadgeExchangeWhereUniqueInput.schema");
const BadgeExchangeUpdateWithoutItemInput_schema_1 = require("./BadgeExchangeUpdateWithoutItemInput.schema");
const BadgeExchangeUncheckedUpdateWithoutItemInput_schema_1 = require("./BadgeExchangeUncheckedUpdateWithoutItemInput.schema");
exports.BadgeExchangeUpdateWithWhereUniqueWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeUpdateWithoutItemInput_schema_1.BadgeExchangeUpdateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeUncheckedUpdateWithoutItemInput_schema_1.BadgeExchangeUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();
