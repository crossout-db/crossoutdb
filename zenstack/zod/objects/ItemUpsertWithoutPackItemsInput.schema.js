"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpsertWithoutPackItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemUpdateWithoutPackItemsInput_schema_1 = require("./ItemUpdateWithoutPackItemsInput.schema");
const ItemUncheckedUpdateWithoutPackItemsInput_schema_1 = require("./ItemUncheckedUpdateWithoutPackItemsInput.schema");
const ItemCreateWithoutPackItemsInput_schema_1 = require("./ItemCreateWithoutPackItemsInput.schema");
const ItemUncheckedCreateWithoutPackItemsInput_schema_1 = require("./ItemUncheckedCreateWithoutPackItemsInput.schema");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.ItemUpsertWithoutPackItemsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutPackItemsInput_schema_1.ItemUpdateWithoutPackItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutPackItemsInput_schema_1.ItemUncheckedUpdateWithoutPackItemsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutPackItemsInput_schema_1.ItemCreateWithoutPackItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutPackItemsInput_schema_1.ItemUncheckedCreateWithoutPackItemsInputObjectSchema)]), where: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional()
}).strict();
