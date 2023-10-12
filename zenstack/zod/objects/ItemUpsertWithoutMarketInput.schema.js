"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpsertWithoutMarketInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemUpdateWithoutMarketInput_schema_1 = require("./ItemUpdateWithoutMarketInput.schema");
const ItemUncheckedUpdateWithoutMarketInput_schema_1 = require("./ItemUncheckedUpdateWithoutMarketInput.schema");
const ItemCreateWithoutMarketInput_schema_1 = require("./ItemCreateWithoutMarketInput.schema");
const ItemUncheckedCreateWithoutMarketInput_schema_1 = require("./ItemUncheckedCreateWithoutMarketInput.schema");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.ItemUpsertWithoutMarketInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutMarketInput_schema_1.ItemUpdateWithoutMarketInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutMarketInput_schema_1.ItemUncheckedUpdateWithoutMarketInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutMarketInput_schema_1.ItemCreateWithoutMarketInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutMarketInput_schema_1.ItemUncheckedCreateWithoutMarketInputObjectSchema)]), where: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional()
}).strict();
