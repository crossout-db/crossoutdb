"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateOneRequiredWithoutBadgeExchangeNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutBadgeExchangeInput_schema_1 = require("./ItemCreateWithoutBadgeExchangeInput.schema");
const ItemUncheckedCreateWithoutBadgeExchangeInput_schema_1 = require("./ItemUncheckedCreateWithoutBadgeExchangeInput.schema");
const ItemCreateOrConnectWithoutBadgeExchangeInput_schema_1 = require("./ItemCreateOrConnectWithoutBadgeExchangeInput.schema");
const ItemUpsertWithoutBadgeExchangeInput_schema_1 = require("./ItemUpsertWithoutBadgeExchangeInput.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateToOneWithWhereWithoutBadgeExchangeInput_schema_1 = require("./ItemUpdateToOneWithWhereWithoutBadgeExchangeInput.schema");
const ItemUpdateWithoutBadgeExchangeInput_schema_1 = require("./ItemUpdateWithoutBadgeExchangeInput.schema");
const ItemUncheckedUpdateWithoutBadgeExchangeInput_schema_1 = require("./ItemUncheckedUpdateWithoutBadgeExchangeInput.schema");
exports.ItemUpdateOneRequiredWithoutBadgeExchangeNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutBadgeExchangeInput_schema_1.ItemCreateWithoutBadgeExchangeInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutBadgeExchangeInput_schema_1.ItemUncheckedCreateWithoutBadgeExchangeInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ItemCreateOrConnectWithoutBadgeExchangeInput_schema_1.ItemCreateOrConnectWithoutBadgeExchangeInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ItemUpsertWithoutBadgeExchangeInput_schema_1.ItemUpsertWithoutBadgeExchangeInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateToOneWithWhereWithoutBadgeExchangeInput_schema_1.ItemUpdateToOneWithWhereWithoutBadgeExchangeInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateWithoutBadgeExchangeInput_schema_1.ItemUpdateWithoutBadgeExchangeInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutBadgeExchangeInput_schema_1.ItemUncheckedUpdateWithoutBadgeExchangeInputObjectSchema)]).optional()
}).strict();
