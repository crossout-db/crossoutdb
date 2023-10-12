"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateOneRequiredWithoutMarketNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutMarketInput_schema_1 = require("./ItemCreateWithoutMarketInput.schema");
const ItemUncheckedCreateWithoutMarketInput_schema_1 = require("./ItemUncheckedCreateWithoutMarketInput.schema");
const ItemCreateOrConnectWithoutMarketInput_schema_1 = require("./ItemCreateOrConnectWithoutMarketInput.schema");
const ItemUpsertWithoutMarketInput_schema_1 = require("./ItemUpsertWithoutMarketInput.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateToOneWithWhereWithoutMarketInput_schema_1 = require("./ItemUpdateToOneWithWhereWithoutMarketInput.schema");
const ItemUpdateWithoutMarketInput_schema_1 = require("./ItemUpdateWithoutMarketInput.schema");
const ItemUncheckedUpdateWithoutMarketInput_schema_1 = require("./ItemUncheckedUpdateWithoutMarketInput.schema");
exports.ItemUpdateOneRequiredWithoutMarketNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutMarketInput_schema_1.ItemCreateWithoutMarketInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutMarketInput_schema_1.ItemUncheckedCreateWithoutMarketInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ItemCreateOrConnectWithoutMarketInput_schema_1.ItemCreateOrConnectWithoutMarketInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ItemUpsertWithoutMarketInput_schema_1.ItemUpsertWithoutMarketInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateToOneWithWhereWithoutMarketInput_schema_1.ItemUpdateToOneWithWhereWithoutMarketInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateWithoutMarketInput_schema_1.ItemUpdateWithoutMarketInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutMarketInput_schema_1.ItemUncheckedUpdateWithoutMarketInputObjectSchema)]).optional()
}).strict();
