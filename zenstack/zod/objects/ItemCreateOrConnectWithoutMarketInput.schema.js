"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateOrConnectWithoutMarketInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemCreateWithoutMarketInput_schema_1 = require("./ItemCreateWithoutMarketInput.schema");
const ItemUncheckedCreateWithoutMarketInput_schema_1 = require("./ItemUncheckedCreateWithoutMarketInput.schema");
exports.ItemCreateOrConnectWithoutMarketInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutMarketInput_schema_1.ItemCreateWithoutMarketInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutMarketInput_schema_1.ItemUncheckedCreateWithoutMarketInputObjectSchema)])
}).strict();
