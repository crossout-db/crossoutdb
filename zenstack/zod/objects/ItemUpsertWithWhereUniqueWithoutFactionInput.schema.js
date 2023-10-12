"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpsertWithWhereUniqueWithoutFactionInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateWithoutFactionInput_schema_1 = require("./ItemUpdateWithoutFactionInput.schema");
const ItemUncheckedUpdateWithoutFactionInput_schema_1 = require("./ItemUncheckedUpdateWithoutFactionInput.schema");
const ItemCreateWithoutFactionInput_schema_1 = require("./ItemCreateWithoutFactionInput.schema");
const ItemUncheckedCreateWithoutFactionInput_schema_1 = require("./ItemUncheckedCreateWithoutFactionInput.schema");
exports.ItemUpsertWithWhereUniqueWithoutFactionInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutFactionInput_schema_1.ItemUpdateWithoutFactionInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutFactionInput_schema_1.ItemUncheckedUpdateWithoutFactionInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutFactionInput_schema_1.ItemCreateWithoutFactionInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutFactionInput_schema_1.ItemUncheckedCreateWithoutFactionInputObjectSchema)])
}).strict();
