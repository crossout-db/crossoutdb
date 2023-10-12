"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateOrConnectWithoutFactionInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemCreateWithoutFactionInput_schema_1 = require("./ItemCreateWithoutFactionInput.schema");
const ItemUncheckedCreateWithoutFactionInput_schema_1 = require("./ItemUncheckedCreateWithoutFactionInput.schema");
exports.ItemCreateOrConnectWithoutFactionInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutFactionInput_schema_1.ItemCreateWithoutFactionInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutFactionInput_schema_1.ItemUncheckedCreateWithoutFactionInputObjectSchema)])
}).strict();
