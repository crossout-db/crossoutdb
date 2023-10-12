"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateToOneWithWhereWithoutPackItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
const ItemUpdateWithoutPackItemsInput_schema_1 = require("./ItemUpdateWithoutPackItemsInput.schema");
const ItemUncheckedUpdateWithoutPackItemsInput_schema_1 = require("./ItemUncheckedUpdateWithoutPackItemsInput.schema");
exports.ItemUpdateToOneWithWhereWithoutPackItemsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateWithoutPackItemsInput_schema_1.ItemUpdateWithoutPackItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutPackItemsInput_schema_1.ItemUncheckedUpdateWithoutPackItemsInputObjectSchema)])
}).strict();
