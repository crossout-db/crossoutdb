"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateOrConnectWithoutPackItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemCreateWithoutPackItemsInput_schema_1 = require("./ItemCreateWithoutPackItemsInput.schema");
const ItemUncheckedCreateWithoutPackItemsInput_schema_1 = require("./ItemUncheckedCreateWithoutPackItemsInput.schema");
exports.ItemCreateOrConnectWithoutPackItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutPackItemsInput_schema_1.ItemCreateWithoutPackItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutPackItemsInput_schema_1.ItemUncheckedCreateWithoutPackItemsInputObjectSchema)])
}).strict();
