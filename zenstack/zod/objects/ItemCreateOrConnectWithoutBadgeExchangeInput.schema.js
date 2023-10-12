"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateOrConnectWithoutBadgeExchangeInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemCreateWithoutBadgeExchangeInput_schema_1 = require("./ItemCreateWithoutBadgeExchangeInput.schema");
const ItemUncheckedCreateWithoutBadgeExchangeInput_schema_1 = require("./ItemUncheckedCreateWithoutBadgeExchangeInput.schema");
exports.ItemCreateOrConnectWithoutBadgeExchangeInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutBadgeExchangeInput_schema_1.ItemCreateWithoutBadgeExchangeInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutBadgeExchangeInput_schema_1.ItemUncheckedCreateWithoutBadgeExchangeInputObjectSchema)])
}).strict();
