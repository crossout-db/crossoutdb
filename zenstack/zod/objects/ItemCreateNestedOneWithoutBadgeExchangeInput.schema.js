"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateNestedOneWithoutBadgeExchangeInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutBadgeExchangeInput_schema_1 = require("./ItemCreateWithoutBadgeExchangeInput.schema");
const ItemUncheckedCreateWithoutBadgeExchangeInput_schema_1 = require("./ItemUncheckedCreateWithoutBadgeExchangeInput.schema");
const ItemCreateOrConnectWithoutBadgeExchangeInput_schema_1 = require("./ItemCreateOrConnectWithoutBadgeExchangeInput.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
exports.ItemCreateNestedOneWithoutBadgeExchangeInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutBadgeExchangeInput_schema_1.ItemCreateWithoutBadgeExchangeInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutBadgeExchangeInput_schema_1.ItemUncheckedCreateWithoutBadgeExchangeInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ItemCreateOrConnectWithoutBadgeExchangeInput_schema_1.ItemCreateOrConnectWithoutBadgeExchangeInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).optional()
}).strict();
