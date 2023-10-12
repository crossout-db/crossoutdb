"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateWithWhereUniqueWithoutFactionInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateWithoutFactionInput_schema_1 = require("./ItemUpdateWithoutFactionInput.schema");
const ItemUncheckedUpdateWithoutFactionInput_schema_1 = require("./ItemUncheckedUpdateWithoutFactionInput.schema");
exports.ItemUpdateWithWhereUniqueWithoutFactionInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutFactionInput_schema_1.ItemUpdateWithoutFactionInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutFactionInput_schema_1.ItemUncheckedUpdateWithoutFactionInputObjectSchema)])
}).strict();
