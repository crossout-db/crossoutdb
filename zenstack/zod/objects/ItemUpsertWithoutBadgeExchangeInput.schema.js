"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpsertWithoutBadgeExchangeInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemUpdateWithoutBadgeExchangeInput_schema_1 = require("./ItemUpdateWithoutBadgeExchangeInput.schema");
const ItemUncheckedUpdateWithoutBadgeExchangeInput_schema_1 = require("./ItemUncheckedUpdateWithoutBadgeExchangeInput.schema");
const ItemCreateWithoutBadgeExchangeInput_schema_1 = require("./ItemCreateWithoutBadgeExchangeInput.schema");
const ItemUncheckedCreateWithoutBadgeExchangeInput_schema_1 = require("./ItemUncheckedCreateWithoutBadgeExchangeInput.schema");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.ItemUpsertWithoutBadgeExchangeInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutBadgeExchangeInput_schema_1.ItemUpdateWithoutBadgeExchangeInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutBadgeExchangeInput_schema_1.ItemUncheckedUpdateWithoutBadgeExchangeInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutBadgeExchangeInput_schema_1.ItemCreateWithoutBadgeExchangeInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutBadgeExchangeInput_schema_1.ItemUncheckedCreateWithoutBadgeExchangeInputObjectSchema)]), where: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional()
}).strict();
