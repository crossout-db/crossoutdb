"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateToOneWithWhereWithoutMarketInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
const ItemUpdateWithoutMarketInput_schema_1 = require("./ItemUpdateWithoutMarketInput.schema");
const ItemUncheckedUpdateWithoutMarketInput_schema_1 = require("./ItemUncheckedUpdateWithoutMarketInput.schema");
exports.ItemUpdateToOneWithWhereWithoutMarketInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutMarketInput_schema_1.ItemUpdateWithoutMarketInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutMarketInput_schema_1.ItemUncheckedUpdateWithoutMarketInputObjectSchema)])
}).strict();
