"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpsertWithWhereUniqueWithoutTypeInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateWithoutTypeInput_schema_1 = require("./ItemUpdateWithoutTypeInput.schema");
const ItemUncheckedUpdateWithoutTypeInput_schema_1 = require("./ItemUncheckedUpdateWithoutTypeInput.schema");
const ItemCreateWithoutTypeInput_schema_1 = require("./ItemCreateWithoutTypeInput.schema");
const ItemUncheckedCreateWithoutTypeInput_schema_1 = require("./ItemUncheckedCreateWithoutTypeInput.schema");
exports.ItemUpsertWithWhereUniqueWithoutTypeInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutTypeInput_schema_1.ItemUpdateWithoutTypeInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutTypeInput_schema_1.ItemUncheckedUpdateWithoutTypeInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutTypeInput_schema_1.ItemCreateWithoutTypeInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutTypeInput_schema_1.ItemUncheckedCreateWithoutTypeInputObjectSchema)])
}).strict();
