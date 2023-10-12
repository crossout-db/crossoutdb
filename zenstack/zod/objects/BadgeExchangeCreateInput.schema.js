"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateNestedOneWithoutBadgeExchangeInput_schema_1 = require("./ItemCreateNestedOneWithoutBadgeExchangeInput.schema");
exports.BadgeExchangeCreateInputObjectSchema = zod_1.z.object({
    quantity: zod_1.z.number(), badges: zod_1.z.number(), active: zod_1.z.boolean(), timestamp: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), item: zod_1.z.lazy(() => ItemCreateNestedOneWithoutBadgeExchangeInput_schema_1.ItemCreateNestedOneWithoutBadgeExchangeInputObjectSchema)
}).strict();
