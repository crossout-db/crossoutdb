"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateToOneWithWhereWithoutBadgeExchangeInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
const ItemUpdateWithoutBadgeExchangeInput_schema_1 = require("./ItemUpdateWithoutBadgeExchangeInput.schema");
const ItemUncheckedUpdateWithoutBadgeExchangeInput_schema_1 = require("./ItemUncheckedUpdateWithoutBadgeExchangeInput.schema");
exports.ItemUpdateToOneWithWhereWithoutBadgeExchangeInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutBadgeExchangeInput_schema_1.ItemUpdateWithoutBadgeExchangeInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutBadgeExchangeInput_schema_1.ItemUncheckedUpdateWithoutBadgeExchangeInputObjectSchema)])
}).strict();
