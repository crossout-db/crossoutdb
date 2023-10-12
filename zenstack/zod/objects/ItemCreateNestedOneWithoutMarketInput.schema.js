"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateNestedOneWithoutMarketInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutMarketInput_schema_1 = require("./ItemCreateWithoutMarketInput.schema");
const ItemUncheckedCreateWithoutMarketInput_schema_1 = require("./ItemUncheckedCreateWithoutMarketInput.schema");
const ItemCreateOrConnectWithoutMarketInput_schema_1 = require("./ItemCreateOrConnectWithoutMarketInput.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
exports.ItemCreateNestedOneWithoutMarketInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutMarketInput_schema_1.ItemCreateWithoutMarketInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutMarketInput_schema_1.ItemUncheckedCreateWithoutMarketInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ItemCreateOrConnectWithoutMarketInput_schema_1.ItemCreateOrConnectWithoutMarketInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).optional()
}).strict();
