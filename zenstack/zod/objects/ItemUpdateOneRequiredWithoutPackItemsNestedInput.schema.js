"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateOneRequiredWithoutPackItemsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateWithoutPackItemsInput_schema_1 = require("./ItemCreateWithoutPackItemsInput.schema");
const ItemUncheckedCreateWithoutPackItemsInput_schema_1 = require("./ItemUncheckedCreateWithoutPackItemsInput.schema");
const ItemCreateOrConnectWithoutPackItemsInput_schema_1 = require("./ItemCreateOrConnectWithoutPackItemsInput.schema");
const ItemUpsertWithoutPackItemsInput_schema_1 = require("./ItemUpsertWithoutPackItemsInput.schema");
const ItemWhereUniqueInput_schema_1 = require("./ItemWhereUniqueInput.schema");
const ItemUpdateToOneWithWhereWithoutPackItemsInput_schema_1 = require("./ItemUpdateToOneWithWhereWithoutPackItemsInput.schema");
const ItemUpdateWithoutPackItemsInput_schema_1 = require("./ItemUpdateWithoutPackItemsInput.schema");
const ItemUncheckedUpdateWithoutPackItemsInput_schema_1 = require("./ItemUncheckedUpdateWithoutPackItemsInput.schema");
exports.ItemUpdateOneRequiredWithoutPackItemsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ItemCreateWithoutPackItemsInput_schema_1.ItemCreateWithoutPackItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedCreateWithoutPackItemsInput_schema_1.ItemUncheckedCreateWithoutPackItemsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ItemCreateOrConnectWithoutPackItemsInput_schema_1.ItemCreateOrConnectWithoutPackItemsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ItemUpsertWithoutPackItemsInput_schema_1.ItemUpsertWithoutPackItemsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ItemWhereUniqueInput_schema_1.ItemWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ItemUpdateToOneWithWhereWithoutPackItemsInput_schema_1.ItemUpdateToOneWithWhereWithoutPackItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUpdateWithoutPackItemsInput_schema_1.ItemUpdateWithoutPackItemsInputObjectSchema),
        zod_1.z.lazy(() => ItemUncheckedUpdateWithoutPackItemsInput_schema_1.ItemUncheckedUpdateWithoutPackItemsInputObjectSchema)]).optional()
}).strict();
